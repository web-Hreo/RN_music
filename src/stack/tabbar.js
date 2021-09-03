import React, { useReducer,useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View,Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import { pxToDp } from '../utils/styleKitsKits';
//引入页面
import Home from "../pages/home/home";
import Hot from "../pages/hot";
import My from "../pages/my";
//定义图片来源
const homeImg = require('../../resource/image/home.png')
const hotImg = require('../../resource/image/hot.png')
const myImg = require('../../resource/image/my.png')

const TabBar=(props)=>{
  const {route,navigation} =props
  const [selectedTab,set_selectedTab] = useState('home')
  const setSelectedTab=(Tab)=>{
    set_selectedTab(Tab)
    const { setOptions } = navigation
    Tab === 'home' && setOptions({ title: '首页' })
    Tab === 'Hot' && setOptions({ title: '热点' })
    Tab === 'My' && setOptions({ title: '我的' })
  }
  useEffect(()=>{
    
  },[selectedTab])
  return(
    <TabNavigator tabBarActiveBackgroundColor='#000'>
      <TabNavigator.Item
        selected={selectedTab === 'home'}
        title="发现"
        renderIcon={() => <Image style={styles.Icon}  source={homeImg} />}
        renderSelectedIcon={() => <Image style={styles.Icon} source={homeImg} />}
        onPress={()=>setSelectedTab('home')}>
        <Home navigation={props.navigation}/>
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Hot'}
        title="热点"
        renderIcon={() => <Image style={styles.Icon} source={hotImg} />}
        renderSelectedIcon={() => <Image style={styles.Icon} source={hotImg} />}
        onPress={()=>setSelectedTab('Hot')}>
        <Hot  navigation={props.navigation}/>
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'My'}
        title="我的"
        renderIcon={() => <Image style={styles.Icon} source={myImg} />}
        renderSelectedIcon={() => <Image style={styles.Icon} source={myImg} />}
        badgeText="1"
        onPress={()=>setSelectedTab('My')}>
        <My/>
      </TabNavigator.Item>
    </TabNavigator>
  )
}
export default TabBar
const styles = StyleSheet.create({
  Icon:{
    width:pxToDp(22),
    height:pxToDp(22)
  }
})
