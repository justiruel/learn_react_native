import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Props from './Props_gue';

export default class global_state extends Component {

  constructor(){
    super();
    this.state ={
      kantor:'MGG'
    }
  }

  render() {
    return (
      <Props nama={this.state.kantor}/>
    );
  }
}
