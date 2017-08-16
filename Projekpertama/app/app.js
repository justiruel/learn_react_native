import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import State from './components/State_gue';
import Props from './components/Props_gue';

export default class app extends Component {
  render() {
    return (
      //<State/>
      <Props nama="joni"/>
    );
  }
}
