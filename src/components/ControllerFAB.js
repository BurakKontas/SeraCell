import React from 'react';
import {
  FAB,
} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {setIsAdd} from '../redux/reducers/sera';

export const ControllerFAB = ({ resetAddController }) => {
    const dispatch = useDispatch();
    const isAdd = useSelector(state => state.sera.isAdd);
    return (
        <FAB
          icon={{
            uri: !isAdd
              ? 'https://cdn-icons-png.flaticon.com/512/748/748113.png'
              : 'https://cdn-icons-png.flaticon.com/512/43/43625.png ',
          }}
          style={{
            position: 'absolute',
            marginVertical: 30,
            marginHorizontal: 10,
            right: 0,
            bottom: 0,
            backgroundColor:"#32a852"
          }}
          onPress={() => {
            dispatch(setIsAdd());
            if(isAdd) resetAddController();
          }}
        />
    )
}