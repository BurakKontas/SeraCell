import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  Menu,
} from 'react-native-paper';
import {responsiveHeight} from '../functions/responsive';
import {responsiveWidth} from './../functions/responsive';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DownArrow} from '../components/icons';
import { useSelector } from 'react-redux';

export const SeraListDropDown = ({ selectedSera ,setSelectedSera, setNews, news, marginTop=-20 }) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const seraList = useSelector(state => state.sera.seraList);
    return (
        <View
          style={{
            paddingTop: responsiveHeight(20),
            flexDirection: 'row',
            justifyContent: 'center',
            height: responsiveHeight(100),
            flex: 0.15,
            minHeight: responsiveHeight(15),
          }}>
          <Text style={{fontSize: 17,marginRight:responsiveWidth(10), color:"white", fontWeight:"600"}}>Sera</Text>
          <Menu
            style={{marginTop: responsiveHeight(marginTop)}}
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity
                onPress={openMenu}
                disabled={visible}
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 4,
                  borderRadius: 10,
                  height:responsiveHeight(30),
                  width:responsiveWidth(200)
                }}>
                <View style={{flexDirection:"row", width:responsiveWidth(200)}}>
                  <DownArrow type={1} style={{marginRight:10}} />
                  <Text style={{width:"60%",textAlign:"center"}}>{seraList[selectedSera].isim}</Text>
                </View>
              </TouchableOpacity>
            }>
            {seraList.map((sera, i) => {
              return (
                <Menu.Item
                  onPress={() => {
                    setSelectedSera(sera.id);
                    closeMenu();
                    setNews({...news, controller: 'Seç', action: 'Seç'});
                  }}
                  key={sera.id}
                  title={sera.isim}
                />
              );
            })}
          </Menu>
        </View>
    )
}