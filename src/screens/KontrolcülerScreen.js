import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import { ControllersCard } from '../components/ControllersCard';
import { SeraListDropDown } from '../components/SeraListDropDown';
import {useSelector} from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import { responsiveHeight } from '../functions/responsive';

const KontrolcülerScreen = () => {
    const [selectedSera, setSelectedSera] = React.useState(0);
    const [news, setNews] = React.useState();
    const seraList = useSelector(state => state.sera.seraList);
  
    return(
        <View style={{flex: 1, backgroundColor:"#48e071"}}>
          <View style={{flex:0.3}}>
          <SeraListDropDown selectedSera={selectedSera} setSelectedSera={setSelectedSera} setNews={setNews} news={news} key={"SeraListDropDown"} marginTop={30} />
          </View>
            <FlatGrid
              style={{flex:0.9,marginTop:responsiveHeight(-140)}}
              itemDimension={150}
              scrollEnabled={true}
              data={[...seraList[selectedSera].controllers]}
              renderItem={({item}) => {
                return (
                  <ControllersCard item={item} key={item.id} selectedSera={selectedSera} />
                )
              }}
                
            />
        </View>
    )
}


export default KontrolcülerScreen;