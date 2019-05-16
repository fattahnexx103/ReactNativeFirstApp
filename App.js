import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextComponent from './TextComponent.js';

export default class App extends React.Component {

  //default method
  render() {
    return (
      <View style = {styles.container}>
        <Text style={{ fontSize: 30, color: "white" }}>This is Header</Text>
        <TextComponent name="First Name"/>
        <TextComponent name="Second Name"/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
