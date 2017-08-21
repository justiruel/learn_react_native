import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from 'react-native';

import {Stack} from './components/router'; //ambil const/variable,class yang di export di router


export default class app extends Component {

  render() {
    return (
      <Stack/>
      //<Tab/>
      /*<View>

        <Gs/>
        <State/>
        <Button
          onPress={()=> navigate('Props')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>*/


      //<Props nama="joni"/>
    );
  }
}
