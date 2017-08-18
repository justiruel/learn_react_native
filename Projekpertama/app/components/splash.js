import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TextInput
} from 'react-native';


export default class splash extends Component {
  constructor(){
    super();
  }

  cus(){
    //Alert.alert("sdsds");
    this.props.navigation.navigate("Props")
  }
  render() {
    setTimeout(()=>{this.cus()}, 3000);

    return (
      <View style={{backgroundColor: 'yellow',height: '100%',justifyContent: 'center',alignItems: 'center' }}>
            <Text>SELAMAT DATANG, INI SPLASH SCREEN</Text>
      </View>
    );
  }


}
