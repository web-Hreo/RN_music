import React, { Component } from 'react'
import {  View,StyleSheet,StatusBar} from 'react-native'
import StackFrame from './src/stack/index'

import Nav from './src/nav'
import Sound from './src/components/sound';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' barStyle='default' translucent={true}></StatusBar>
        <StackFrame></StackFrame>
        <Sound/>
          {/* <Nav/> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    height:500
  },
  
})
