import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import {
  Provider as PaperProvider,
} from 'react-native-paper';
import {useSelector} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { ControllerSwipeableFlatList } from '../components/controllersList';
import { SeraListDropDown } from '../components/SeraListDropDown';
import { ControllerAddView } from '../components/ControllerAddView';
import { ControllerFAB } from '../components/ControllerFAB';
import { responsiveWidth } from './../functions/responsive';

const KontrolcüOtomasyonScreen = ({bottomSheetRef, resetAddController, news, setNews}) => {
  const [selectedSera, setSelectedSera] = React.useState(0);


  const seraList = useSelector(state => state.sera.seraList);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setTimeout(() => { //sayfaya geçişi yavaşlatmasın diye asynclik katmak için
          bottomSheetRef.current.dismiss();
        })
      };
    }, [])
  );

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, backgroundColor:"#48e071"}}
      >
        <SeraListDropDown selectedSera={selectedSera} setSelectedSera={setSelectedSera} setNews={setNews} news={news} key={"SeraListDropDown"} />
        <ControllerAddView bottomSheetRef={bottomSheetRef} news={news} selectedSera={selectedSera} setNews={setNews} resetAddController={resetAddController} />
        <View style={{flexDirection:"row"}}>
          <Text style={{marginLeft:responsiveWidth(25)}}>Kontrolcü</Text>
          <Text style={{marginLeft:responsiveWidth(70)}}>Şartlar</Text>
          <View style={{flexDirection:"row", marginTop:2,marginLeft:responsiveWidth(65)}}>
            <Text style={{fontSize:12}}>Aksiyon</Text>
            <Text style={{fontSize:12,marginLeft:responsiveWidth(5)}}>Bildirim</Text>
            <Text style={{marginLeft:responsiveWidth(1),fontSize:12}}>{" "}Aktiflik</Text>
          </View>
        </View>
        <ControllerSwipeableFlatList dataList={seraList[selectedSera]} selectedSera={selectedSera} />
        <ControllerFAB resetAddController={resetAddController} />
      </KeyboardAvoidingView>
    </PaperProvider>
  );
};

export default KontrolcüOtomasyonScreen;
