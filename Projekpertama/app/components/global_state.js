import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import Props from './Props_gue';

export default class global_state extends Component {

  static navigationOptions = {
    title: 'global cuy',
  };

  constructor(){
    super();
    this.state ={
      kantor:'MGG'
    }
  }

  redirect(){
    //Alert.alert("hallo");
    //const { navigate } = this.props.navigation;
    this.props.navigation.navigate("Tabku");
  }
  render() {
    return (
      <View>
      <Props nama={this.state.kantor}/>
      <Button
              onPress={()=>{this.redirect()}}
              title="1"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
      />
      <Button
              onPress={()=>{this.props.navigation.navigate("State")}}
              title="2"
              color="#ff0000"
              accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}
