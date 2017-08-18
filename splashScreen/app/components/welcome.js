import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  BackHandler,
  Text,
  Alert,
  View,
  TextInput
} from 'react-native';

export default class welcome extends Component {
  render() {
	//Back Press handling
	BackHandler.addEventListener('hardwareBackPress', function() { //https://facebook.github.io/react-native/docs/backhandler.html
		// Works on both iOS and Android
		Alert.alert(
		  'Konfirmasi',
		  'Anda yakin ingin keluar?',
		  [
			{text: 'Ya', onPress: () => BackHandler.exitApp()},
			{text: 'Tidak', style: 'cancel'},
		  ],
		  { cancelable: false }
		)		
		
		return true;
	})  
    return (
      <View style={{backgroundColor: 'purple',height: '100%',justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{fontSize: 30,color:'white'}}>SELAMAT DATANG!!</Text>
      </View>
    );
  }
}
