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
      <View style={{backgroundColor: 'yellow',height: '50%'}}>
        <View style={{flexDirection: 'row',backgroundColor: 'yellow'}}>
            <Text>Hello nama saya </Text>
            <Text style={styles.inline}>{this.props.nama}</Text>
        </View>
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
    color:'blue'
  }
  });
