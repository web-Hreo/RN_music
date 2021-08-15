import React, { Component } from 'react'
import {  View,StyleSheet,StatusBar} from 'react-native'
import StackFrame from './src/stack/index'

import Nav from './src/nav'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='transparent' barStyle='default' translucent={true}></StatusBar>
        <StackFrame></StackFrame>
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
