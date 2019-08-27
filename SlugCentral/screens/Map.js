import React, {Component}                            from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Map extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text>This is the Maps screen</Text>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
