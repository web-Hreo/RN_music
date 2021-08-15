import React from 'react'
import { Image,StyleSheet } from 'react-native'
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from 'react-navigation'
//引入页面
import Home from "../pages/home/home";
import Hot from "../pages/hot";
import My from "../pages/my";
import { pxToDp } from '../utils/styleKitsKits';
//定义图片来源
const homeImg = require('../../resource/image/home.png')
const hotImg = require('../../resource/image/hot.png')
const myImg = require('../../resource/image/my.png')
const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({tintColor}) => {
          return <Image
              source={homeImg}
              style={[styles.Icon,{tintColor}]}
          />
        },
      }
    },
    Hot: {
      screen: Hot,
      navigationOptions: {
        tabBarLabel: "详情",
        tabBarIcon: ({tintColor}) => {
          return <Image
              source={hotImg}
              style={[styles.Icon,{tintColor}]}
          />
        },
      }
    },
    My: {
      screen: My,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({tintColor}) => {
          return <Image
              source={myImg}
              style={[styles.Icon,{tintColor}]}
          />
        },
      }
    },
  },
  {
    tabBarOptions:{
      swipeEnabled:true,
      animationEnabled:true,
      activeTintColor:"red",
      tabBarPosition: 'bottom',
    },
    // animationEnabled: true,
  }
)
const styles = StyleSheet.create({
  Icon:{
    width:pxToDp(22),
    height:pxToDp(22)
  }
})
// export default BottomNavigator
export default createAppContainer(BottomNavigator)

