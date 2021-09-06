import React from 'react';
import {View, Text,Button} from 'react-native';
// 导入包
import { NavigationContainer } from '@react-navigation/native';
// 创建路由表使用
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//引入页面
import Home from "../pages/home/home";
import Hot from "../pages/hot";
import My from "../pages/my";
import TabBar from '../stack/tabbar'
import SongListDetail from '../pages/home/songListDetail'
import SoundDemo from '../components/SoundDemo';

// const Stack = createStackNavigator()
const Stack = createNativeStackNavigator()
//导航栏颜色配置
const screenOptions = {
  headerMode: 'screen',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#1A1A1A' },
  animation:"slide_from_right",
  orientation:'portrait'
}
function StackFrame(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="TabBar"
      >
        <Stack.Screen name="TabBar" options={{ title: '首页' }} component={TabBar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hot" component={Hot} />
        <Stack.Screen name="My" component={My} />
        <Stack.Screen name="SongListDetail" options={{ title: '精选歌单' }} component={SongListDetail} />
        <Stack.Screen name="SoundDemo" options={{ title: '音乐demo' }} component={SoundDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackFrame