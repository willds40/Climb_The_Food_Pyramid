import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FoodGroups from '../data/FoodGroups.js'
import FoodGroupButton from '../components/FoodGroupButton.js'

export default class HomeScreen extends React.Component {

loadFoodGroups = () =>{
  return FoodGroups.map((food)=>{
    return(
      <FoodGroupButton
      food={food}
      key={food}
      />
    )
  })
}
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={{textAlign:"center",fontSize:30, marginBottom:30}}>Climb the Pyramid</Text>
        {this.loadFoodGroups()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
  },
  contentContainer: {
    paddingTop: 30,
    alignContent:"space-around"
  },

});
