import React, { Component } from 'react'
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
export default class TabBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab:'home'
    }
  }
  setSelectedTab(selectedTab){
    this.setState({ selectedTab })
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="发现"
          renderIcon={() => <Image style={styles.Icon}  source={homeImg} />}
          renderSelectedIcon={() => <Image style={styles.Icon} source={homeImg} />}
          onPress={this.setSelectedTab.bind(this,'home')}>
          <Home navigation={this.props.navigation}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Hot'}
          title="热点"
          renderIcon={() => <Image style={styles.Icon} source={hotImg} />}
          renderSelectedIcon={() => <Image style={styles.Icon} source={hotImg} />}
          onPress={this.setSelectedTab.bind(this,'Hot')}>
          <Hot/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'My'}
          title="我的"
          renderIcon={() => <Image style={styles.Icon} source={myImg} />}
          renderSelectedIcon={() => <Image style={styles.Icon} source={myImg} />}
          badgeText="1"
          onPress={this.setSelectedTab.bind(this,'My')}>
          <My/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  Icon:{
    width:pxToDp(22),
    height:pxToDp(22)
  }
})
