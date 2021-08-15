import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Hot extends Component {
  // static navigationOptions = {
  //   tabBarLabel: 'Hot',
  //   // tabBarIcon: () => (
  //   //   <Image
  //   //       source={require('../../resource/image/home.png')}
  //   //       style={styles.icon}
  //   //   />
  //   // )
  // };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,height: 26,
  }
})
