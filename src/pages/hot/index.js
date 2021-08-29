import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {pxToDp,screenHeight} from '../../utils/styleKitsKits'
import ScrollableTabView,
{
  DefaultTabBar,
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import Recommend from './recommend'


export default class Hot extends Component {
 
  render() {
    return (
    // <Tab.Navigator>
    //     <Tab.Screen name="index" component={Home} />
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    <View style={styles.ScrollView}>
      <ScrollableTabView >
        <ScrollView tabLabel='推荐'><Recommend/></ScrollView>
        <Text tabLabel='关注'>Tab 2</Text>
        <Text tabLabel='Tab 3'>Tab 3</Text>
      </ScrollableTabView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,height: 26,
  },
  ScrollView:{
    flex:1,
  }
})
