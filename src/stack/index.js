import React from 'react';
import {View, Text,Button} from 'react-native';
// 导入包
import { NavigationContainer } from '@react-navigation/native';
// 创建路由表使用
import { createStackNavigator } from '@react-navigation/stack';

//引入页面
import Home from "../pages/home/home";
import Hot from "../pages/hot";
import My from "../pages/my";
import TabBar from '../stack/tabbar'
import SongListDetail from '../pages/home/songListDetail'

const Stack = createStackNavigator()

const screenOptions = {
  headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
}
function testScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>我牛逼吗 铁子！</Text>
      <Button
      title="快点我"
      onPress={() =>navigation.navigate('TabBar')}
      ></Button>
    </View>
  );
}

function test2Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>卧槽 我真牛逼</Text>
    </View>
  );
}

function StackFrame(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' },
      }}  initialRouteName="TabBar">
        <Stack.Screen name="TabBar" options={{ title: '首页' }} component={TabBar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hot" component={Hot} />
        <Stack.Screen name="My" component={My} />
        <Stack.Screen name="SongListDetail" options={{ title: '精选歌单' }} component={SongListDetail} />
        <Stack.Screen name="test" component={testScreen} />
        <Stack.Screen name="test2" component={test2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackFrame