import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import KontrolcüOtomasyonScreen from './KontrolcüOtomasyonuScreen';
import KontrolcülerScreen from './KontrolcülerScreen';
import {responsiveHeight} from '../functions/responsive';


import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import {Provider} from 'react-native-paper';
import { BottomSheetModalComponent } from '../components/BottomSheetModalComponent';

const Tab = createBottomTabNavigator();

const Main = () => {
  var bottomSheetRef = React.useRef(null);

  const [news, setNews] = React.useState({
    conditions: [],
    action:{action:"Seç",notification:false,active:false},
    controller: 'Seç',
  });

  const [addController, setAddController] = React.useState({
    low: '',
    name: 'Sensörler',
    high: '',
  });

  function resetAddController() {
    setAddController({
      low: '',
      name: 'Sensörler',
      high: '',
    });
  }

  return (
    <Provider>
      <BottomSheetModalProvider>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarIconStyle: {display: 'none'},
                tabBarStyle: {paddingBottom: responsiveHeight(17.5)},
                headerTitleAlign: 'center',
                headerStyle:{
                  backgroundColor:"#32a852",
                },
                headerTitleStyle:{
                  color:"white"
                }
                }}>
              <Tab.Screen
                name="Kontrolcü Otomasyonu"
                children={props => (
                  <KontrolcüOtomasyonScreen
                    {...props}
                    bottomSheetRef={bottomSheetRef}
					          resetAddController={resetAddController}
                    news={news}
                    setNews={setNews}
                  />
                )}
              />
              <Tab.Screen name="Kontrolcüler"                 
              children={props => (
                  <KontrolcülerScreen
                    {...props}
                    bottomSheetRef={bottomSheetRef}
					          resetAddController={resetAddController}
                  />
                )} 
                />
            </Tab.Navigator>
          </NavigationContainer>
          <BottomSheetModalComponent bottomSheetRef={bottomSheetRef} addController={addController} resetAddController={resetAddController} setAddController={setAddController} setNews={setNews} news={news} />
        </View>
      </BottomSheetModalProvider>
    </Provider>
  );
};

export default Main;
