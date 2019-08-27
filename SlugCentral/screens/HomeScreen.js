import React, {Component}                            from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text>This is the Home screen</Text>
        <Button title="Courses" onPress={ () => this.props.navigation.navigate('Courses')} />
        <Button title="My Courses" onPress={ () => this.props.navigation.navigate('myCourses') }/>
        <Button title="Maps" onPress={ () => this.props.navigation.navigate('Map') }/>
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
