import React from 'react';
import {
    Text,
  View} from 'react-native';
import { Door, Fan, Light, Valve, X } from './icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { changeActive, changeControllerType } from '../redux/reducers/sera';
import { Button, Divider, Menu } from 'react-native-paper';
import { responsiveHeight } from '../functions/responsive';
import { responsiveWidth } from './../functions/responsive';
import { useToast } from "react-native-toast-notifications";

const controllerTypes = ["Fan","Door","Light","Valve","Fog"]

export const ControllersCard = ({ item, selectedSera }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const toast = useToast();

    if(item.conditions.length == 0 || item.action == undefined) return null;

    function Anchor() {
        return (
            <TouchableOpacity 
            delayLongPress={100}
            onLongPress={() => {
                openMenu();
            }}
            activeOpacity={1}
            style={{backgroundColor:"#32a852",width:150,height:100,margin:10,flexDirection:"row",alignItems:"center",borderRadius:10,elevation: 6,shadowColor: '#000',shadowOffset: {width: 0, height: 4},shadowOpacity: 0.3,shadowRadius: 4.65}}>
                <View style={{justifyContent:"space-around",height:"100%",marginLeft:5}}>
                    <Icon type={item.type} />
                    <Text>{item.isim}</Text>
                </View>
                <TouchableOpacity style={{marginLeft:5,padding:5,backgroundColor:(item.action.active) ? "#ff726f" : "limegreen",borderRadius:5,minWidth:"30%",elevation: 6,shadowColor: '#000',shadowOffset: {width: 0, height: 4},shadowOpacity: 0.3,shadowRadius: 4.65}}
                    onPress={() => {
                        dispatch(changeActive({seraId:selectedSera,controllerId:item.id,situation:!item.action.active}))
                        toast.show(`${item.isim}'başarıyla ${(!item.action.active) ? "açıldı" : "kapatıldı"}`, {
                          type: "success",
                          placement: "top",
                          duration: 1500,
                          offset: 30,
                          animationType: "slide-in",
                        });
                        }}
                >
                    <Text style={{textAlign:"center"}}>{(item.action.active) ? "Aç" : "Kapat"}</Text>
                </TouchableOpacity>
        </TouchableOpacity>
        )
    }

    function Icon({type}) {
        switch(type.toLowerCase()) {
            case "fan":
                return <Fan />
            case "door":
                return <Door />
            case "light":
                return <Light />
            case "valve":
                return <Valve />
            case "fog":
                return <Fog />
            default:
                return <X />
        }
    }
    return (
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
            style={{marginTop: responsiveHeight(125),marginLeft:responsiveWidth(15)}}
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Anchor  />}>
            {controllerTypes.map((controller,i) => {
                return <Menu.Item onPress={() => {dispatch(changeControllerType({
                    seraId:selectedSera,
                    controllerId:item.id,
                    type:controller
                }))
                toast.show(`${item.isim}'in tipi başarıyla ${controller} olarak değiştirildi.`, {
                          type: "success",
                          placement: "top",
                          duration: 1500,
                          offset: 30,
                          animationType: "slide-in",
                        });
                closeMenu();
                }} 
                title={controller} />
            })}
        </Menu>
      </View>
    )
}