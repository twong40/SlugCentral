import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/router.js';
export default class App extends Component {
  render(){
    return(
      <Navigator/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
