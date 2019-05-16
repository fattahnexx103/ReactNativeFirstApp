import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

export default class TextComponent extends Component{

  render() {
    return(

      <Text style={styles.textStyle}> {this.props.name}</Text>

    );
  }
}


const styles = StyleSheet.create({

  textStyle: {
    fontSize: 22,
    color: "#FFFFFF",
    backgroundColor: "purple",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  }
});
