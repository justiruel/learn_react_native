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
      <View>
          <Text>Hello nama saya {this.props.nama}</Text>
      </View>
    );
  }
}
