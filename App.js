/*
 * @Author: your name
 * @Date: 2021-08-27 10:42:35
 * @LastEditTime: 2021-09-10 15:23:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SM_SEARCH_APPd:\_SM_CODE\_React_Nactive\RN_music\App.js
 */
import React, { Component } from 'react'
import {  View,StyleSheet,StatusBar} from 'react-native'
import StackFrame from './src/stack/index'
import {Provider} from 'react-redux';
import store from './redux/store';
import Nav from './src/nav'
import Sound from './src/components/sound';
import { NativeBaseProvider, Box } from 'native-base';
export default class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar backgroundColor='transparent' barStyle='default' translucent={true}></StatusBar>
            <StackFrame ></StackFrame>
            {/* <Sound/> */}
              {/* <Nav/> */}
          </View>
        </Provider>
      </NativeBaseProvider>


    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    height:500
  },
  
})
