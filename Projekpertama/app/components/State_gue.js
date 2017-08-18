import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class State_gue extends Component {

  static navigationOptions = {
    title: 'State',
  };


  constructor(){
    super();
    this.state ={
      nama:'irul'
    }
  }

  render() {
    return (
      <View>
          <TextInput
            onChangeText={(text) => {this.setState({nama:text})}}
          />

          <Text>Hello nama saya {this.state.nama}</Text>

      </View>
    );
  }
}
