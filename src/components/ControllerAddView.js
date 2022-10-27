import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import {
  Menu,
} from 'react-native-paper';
import {responsiveHeight} from '../functions/responsive';
import { useSelector, useDispatch } from 'react-redux';
import {responsiveWidth} from './../functions/responsive';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Save, TrashCan } from './icons';
import { updateControllerActions, updateControllerConditions } from '../redux/reducers/sera';
import { useToast } from 'react-native-toast-notifications'

export const ControllerAddView = ({ selectedSera, bottomSheetRef, news, setNews, resetAddController }) => {
    const [visibleController, setVisibleController] = React.useState(false);
    const [visibleAction, setVisibleAction] = React.useState(false);
    
    const openAction = () => setVisibleAction(true);
    const closeAction = () => setVisibleAction(false);
    const openController = () => setVisibleController(true);
    const closeController = () => setVisibleController(false);

    const toast = useToast();

    const seraList = useSelector(state => state.sera.seraList);
    const isAdd = useSelector(state => state.sera.isAdd);

    const dispatch = useDispatch()
    return (
        <View
        style={{
          flex: isAdd ? 0.7 : 0.000000000001,
          backgroundColor: '#32a852',
          paddingHorizontal: 20,
          justifyContent: 'space-around',
          marginBottom:5,
          maxHeight:responsiveHeight(200)
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            opacity: isAdd ? 1 : 0,
          }}>
          <View>
            <Text>Kontrolcü</Text>
            <Menu
              style={{marginTop: responsiveHeight(-20)}}
              visible={visibleController}
              onDismiss={closeController}
              anchor={
                <TouchableOpacity
                  disabled={visibleController}
                  onPress={openController}
                  style={{
                    paddingVertical: responsiveHeight(10),
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 16}}>{(typeof(news.controller) !== 'number') ? "Seç" : seraList[selectedSera].controllers[news.controller].isim}</Text>
                </TouchableOpacity>
              }>
              {seraList[selectedSera].controllers.map((controller, i) => {
                return (
                  <Menu.Item
                    onPress={() => {
                      setNews({...news, controller: parseInt(controller.id)});
                      closeController();
                    }}
                    key={controller.id}
                    title={controller.isim}
                  />
                );
              })}
            </Menu>
          </View>
          <View>
            <Text>Şartlar</Text>
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current.present();
              }}
              style={{
                padding: responsiveWidth(5),
                width: responsiveWidth(160),
                borderWidth:1
              }}>
              <ScrollView
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{height:"65%"}}
                >
                {(news.conditions.length === 0) ? <Text>Boş</Text> :
                  news.conditions.map(condition => {
                  return (
                    <View style={{flexDirection:"row"}}>
                      {(condition.low !== "") ? <Text style={{fontSize:12}}>{condition.low}{" < "}</Text> : null}
                      <Text style={{fontSize:12}}>{condition.name}</Text>
                      {(condition.high !== "") ? <Text style={{fontSize:12}}>{" < "}{condition.high}</Text> : null}
                    </View>
                  )
                })
                }
              </ScrollView>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Aksiyon</Text>
            <Menu
              style={{marginTop: responsiveHeight(-20)}}
              visible={visibleAction}
              onDismiss={closeAction}
              anchor={
                <TouchableOpacity
                  disabled={visibleAction}
                  onPress={openAction}
                  style={{
                    paddingVertical: responsiveHeight(10),
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 15}}>{(news.action.action == true) ? "Aç" : (news.action.action == false) ? "Kapat" : "Seç"}</Text>
                </TouchableOpacity>
              }>
              <Menu.Item
                onPress={() => {
                  setNews({...news, action:{action:true,notification:false,active:false}});
                  closeAction();
                }}
                title={'Aç'}
              />
              <Menu.Item
                onPress={() => {
                  setNews({...news, action:{action:false,notification:false,active:false}});
                  closeAction();
                }}
                title={'Kapat'}
              />
            </Menu>
          </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-around", opacity: isAdd ? 1 : 0}}>
        <TouchableOpacity
          onPress={() => {
            if(news.conditions.length == 0) {
              toast.show("Bir şart girmeyi unuttunuz !", {
              type: "danger",
              placement: "top",
              duration: 1500,
              offset: 30,
              animationType: "slide-in",
            });
            } else if(news.action.action == "Seç") {
              toast.show("Bir aksiyon seçmeyi unuttunuz !", {
              type: "danger",
              placement: "top",
              duration: 1500,
              offset: 30,
              animationType: "slide-in",
            });
            } else if(news.controller == "Seç") {
              toast.show("Bir kontrolcü seçmeyi unuttunuz !", {
              type: "danger",
              placement: "top",
              duration: 1500,
              offset: 30,
              animationType: "slide-in",
            });
            } else {
            dispatch(updateControllerActions({
              seraId:selectedSera,
              controllerId:news.controller,
              action:news.action
            }))
            dispatch(updateControllerConditions({
              seraId:selectedSera,
              controllerId:news.controller,
              conditions:news.conditions
            }))
            setNews({...news, controller: 'Seç', action: {action:"Seç",notification:false,active:false}, conditions:[]});
            toast.show("Başarıyla Kaydedildi", {
              type: "success",
              placement: "top",
              duration: 1500,
              offset: 30,
              animationType: "slide-in",
            });
          }
          }}
          style={{
            flexDirection:"row",
            height:20
          }}>
            <Save />
            <Text>Kaydet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNews({...news, controller: 'Seç', action: 'Seç', conditions:[]});
          }}
          style={{
            flexDirection:"row",
            height:20
          }}>
            <TrashCan />
            <Text>Temizle</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    )
}