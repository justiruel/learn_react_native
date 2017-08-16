import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Props_gue extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
          <Text style={styles.inline}>Hello nama saya </Text>
          <Text style={styles.titleText,styles.inline,{color:'red'}}>{this.props.nama}</Text>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inline:{
    backgroundColor: 'green',
  }
  });
