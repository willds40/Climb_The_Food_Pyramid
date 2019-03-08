import React from 'react';
import {
  View,
  Button
} from 'react-native';

const FoodGroupButton = (props) =>{
  return(
    <View style={{margin:10, backgroundColor:"blue"}}>
      <Button
        title={props.food}
        color="white"
      />
    </View>
  )
}

export default FoodGroupButton
