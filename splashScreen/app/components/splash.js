import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TextInput
} from 'react-native' //di react tidak wajib menggunakan semicolon ";"


export default class splash extends Component {
  constructor(){
    super();
  }

  redirect(){
    this.props.navigation.navigate("Welcome")  
  }
  render() {
    setTimeout(()=>{this.redirect()}, 3000);
    return (
      <View style={{backgroundColor: 'yellow',height: '100%',justifyContent: 'center',alignItems: 'center' }}>
            <Text style={{fontSize: 30,color:'black'}}>SPLASH SCREEN</Text>
      </View>
    );
  }


}
