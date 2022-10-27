import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView
} from 'react-native';
import {responsiveHeight} from '../functions/responsive';
import {responsiveWidth} from './../functions/responsive';
import {NO, OK} from '../components/icons';
import SwipeableFlatList from 'react-native-swipeable-list';
import { useDispatch, useSelector } from 'react-redux';
import { changeActive, changeNotification, deleteController } from '../redux/reducers/sera';
import { useToast } from "react-native-toast-notifications";


const darkColors = {
    background: '#121212',
    primary: '#BB86FC',
    primary2: '#3700b3',
    secondary: '#03DAC6',
    onBackground: '#FFFFFF',
    error: '#CF6679',
};
  
const extractItemKey = item => {
    return item.id
};

export const ControllerSwipeableFlatList = ({ dataList, selectedSera }) => {
    const dispatch = useDispatch();

    const toast = useToast();

    const Item = ({ item }) => {
  
      if(item.conditions.length == 0 || item.action == undefined) return null;
      return (
        <ScrollView 
        nestedScrollEnabled={true}
        style={{
            minHeight: 80,
            flexDirection: 'row',
        }}>
              <View
              key={item.id}
              style={{
                  flexDirection: 'row',
                  height: responsiveHeight(100),
                  backgroundColor: '#68e88b',
                  marginVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginHorizontal: 5,
                  elevation: 6,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
              }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: responsiveWidth(10),
                      borderRightWidth: 1,
                      height: '90%',
                      alignSelf: 'center',
                    }}>
                    <Text>{item.isim}</Text>
                  </View>
                  <View style={{minWidth: responsiveWidth(145), justifyContent:"center",alignItems:"center"}}>
                    {
                      item.conditions.map((condition, i) => {
                        return (
                          <View>
                            <Text>
                              {(condition.low) ?  condition.low + ' < ' : null}{condition.name}{(condition.high) ? ' < ' + condition.high: null}
                            </Text>
                          </View>
                        );
                      })
                    }
                  </View>
                  <View style={{justifyContent:"center",marginRight:10,paddingLeft:10, height:'90%', borderLeftWidth:1,alignSelf: 'center',}}>
                    <Text style={{textAlign:"center",minWidth:responsiveWidth(37)}}>{(item.action.action == true) ? "Aç" : "Kapat"}</Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingLeft: responsiveWidth(10),
                      borderLeftWidth: 1,
                      height: '90%',
                      alignSelf: 'center',
                    }}>
                    <TouchableOpacity onPress={() => {
                      dispatch(changeNotification({
                          seraId:selectedSera,
                          controllerId:item.id,
                          situation:!item.action.notification,
                        }))
                        toast.show(`${item.isim}'in bildirimleri başarıyla ${(!item.action.notification) ? "açıldı" : "kapatıldı"}`, {
                          type: "success",
                          placement: "top",
                          duration: 1500,
                          offset: 30,
                          animationType: "slide-in",
                        });
                        }}
                        >
                    {item.action.notification == true ?
                      <OK />
                     : 
                      <NO />
                    }
                    </TouchableOpacity>
                    <View style={{width: 10}}></View>
                    <TouchableOpacity onPress={() => {
                        dispatch(changeActive({
                          seraId:selectedSera,
                          controllerId:item.id,
                          situation:!item.action.active,
                        }))
                        toast.show(`${item.isim}'in aktivasyonu başarıyla ${(!item.action.active) ? "açıldı" : "kapatıldı"}`, {
                          type: "success",
                          placement: "top",
                          duration: 1500,
                          offset: 30,
                          animationType: "slide-in",
                        });
                    }}>
                    {item.action.active == true ? 
                      <OK />
                     : 
                      <NO />
                     }
                    </TouchableOpacity>
                  </View>
                </View>
        </ScrollView>
    );
  };


    const QuickActions = (index, qaItem) => {
        return (
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
            <View style={{
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              <Pressable onPress={() => {
                dispatch(deleteController({seraId:selectedSera, controllerId:qaItem.id}))
                toast.show("Seçili kontrolcü başarıyla silindi.", {
                  type: "success",
                  placement: "top",
                  duration: 1500,
                  offset: 30,
                  animationType: "slide-in",
                });
              }}>
                <Text style={{
                    color: darkColors.error,
                    fontWeight: 'bold',
                }}>Sil</Text>
              </Pressable>
            </View>
          </View>
        );
    };
    return (
    <ScrollView
    nestedScrollEnabled={true}
    style={{backgroundColor:"#48e071"}}
    >
        <SwipeableFlatList      
        keyExtractor={extractItemKey}
        data={dataList.controllers}
        renderItem={({item}) => {
        return(
        <View>
            <Item item={item} />
        </View>
        )
        }}
        maxSwipeDistance={80}
        renderQuickActions={({index, item}) => QuickActions(index, item)}
        shouldBounceOnMount={true}
    />
    </ScrollView>
    );
}