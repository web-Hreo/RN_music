import React, { useReducer,useState, useEffect, useRef } from 'react';
import { Text, View,StyleSheet,ScrollView } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Recommend from './recommend'

const Hot =(props)=>{
  useEffect(()=>{
  },[])
  return(
    <View style={styles.ScrollView}>
      <ScrollableTabView >
        <ScrollView tabLabel='推荐'><Recommend/></ScrollView>
        <Text tabLabel='关注'>Tab 2</Text>
        <Text tabLabel='Tab 3'>Tab 3</Text>
      </ScrollableTabView>
    </View>
  )
}
export default Hot

const styles = StyleSheet.create({
  icon: {
    width: 26,height: 26,
  },
  ScrollView:{
    flex:1,
  }
})
