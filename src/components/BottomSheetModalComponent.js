import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {responsiveHeight} from '../functions/responsive';

import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import {Menu} from 'react-native-paper';
import { useToast } from "react-native-toast-notifications";

export const BottomSheetModalComponent = ({ bottomSheetRef, addController, resetAddController, setAddController, setNews, news }) => {
    const snapPoints = React.useMemo(() => ['20%', '60%'], []);
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const toast = useToast();

    function AddController() {
        const index = news.conditions.findIndex((condition) => condition.name == addController.name);
        if(index != -1) {
            setNews({
                ...news,
                conditions:[...news.conditions.splice(index,1)]
            })
        }
        setNews({
            ...news,
            conditions:[...news.conditions,addController]
        })
      resetAddController();
    }
  
    const sensors = useSelector(state => state.sera.sensors);
  
    return (
        <BottomSheetModal
            bottomInset={responsiveHeight(50)}
            detached={false}
            snapPoints={snapPoints}
            ref={bottomSheetRef}
        >
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}>
                <TextInput
                  placeholder="+"
                  style={{
                    backgroundColor: 'grey',
                    borderRadius: 10,
                    height: 40,
                    width: 40,
                    textAlign: 'center',
                  }}
                  value={addController.low}
                  keyboardType="numeric"
                  onChangeText={text =>
                    setAddController({...addController, low: text})
                  }
                />

                <Text style={{fontSize: 30}}>{'<'}</Text>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: 'grey',
                    borderRadius: 10,
                    alignItems: 'center',
                  }}>
                  <Menu
                    style={{marginTop: responsiveHeight(50)}}
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                      <TouchableOpacity
                        onPress={openMenu}
                        disabled={visible}
                        style={{
                          backgroundColor: 'grey',
                          paddingHorizontal: 20,
                          paddingVertical: 5,
                          borderRadius: 10,
                        }}>
                        <Text style={{fontSize: 17}}>{addController.name}</Text>
                      </TouchableOpacity>
                    }>
                    {sensors.map((sensor, i) => {
                      return (
                        <Menu.Item
                          onPress={() => {
                            setAddController({...addController, name: sensor});
                            closeMenu();
                          }}
                          key={sensors}
                          title={sensor}
                        />
                      );
                    })}
                  </Menu>
                </TouchableOpacity>
                <Text style={{fontSize: 30}}>{'<'}</Text>
                <TextInput
                  placeholder="+"
                  style={{
                    backgroundColor: 'grey',
                    borderRadius: 10,
                    height: 40,
                    width: 40,
                    textAlign: 'center',
                  }}
                  value={addController.high}
                  keyboardType="numeric"
                  onChangeText={text =>
                    setAddController({...addController, high: text})
                  }
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    if(addController.name == "Sensörler") {
                      toast.show("Bir sensör seçmeyi unuttunuz !", {
                        type: "danger",
                        placement: "top",
                        duration: 1500,
                        offset: 30,
                        animationType: "slide-in",
                      });
                      return;
                    }
                    if(addController.high == "" && addController.low == "") {
                      toast.show("Bir aralık girmeyi unuttunuz !", {
                        type: "danger",
                        placement: "top",
                        duration: 1500,
                        offset: 30,
                        animationType: "slide-in",
                      });
                      return;
                    }
                    if((addController.high != "" && addController.low != "") && addController.high < addController.low) {
                      toast.show("Büyüklükleri ters girdin !", {
                        type: "danger",
                        placement: "top",
                        duration: 1500,
                        offset: 30,
                        animationType: "slide-in",
                      });
                      return;
                    }
                    AddController();
                    bottomSheetRef.current.dismiss();
                    toast.show("Şart başarıyla eklendi !", {
                        type: "success",
                        placement: "top",
                        duration: 1500,
                        offset: 30,
                        animationType: "slide-in",
                      });
                  }}>
                  <Text>Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    resetAddController();
                    bottomSheetRef.current.dismiss();
                    toast.show("İşlem iptal edildi !", {
                        type: "warning",
                        placement: "top",
                        duration: 1500,
                        offset: 30,
                        animationType: "slide-in",
                      });
                  }}>
                  <Text>İptal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheetModal>
    )
}