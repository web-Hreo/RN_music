
import React, { useReducer,useState, useEffect, useRef } from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,Alert} from 'react-native';
import Sound from 'react-native-sound';
import {pxToDp} from '../utils/styleKitsKits'
import SvgUri from "react-native-svg-uri";
import {icon_play} from '../assets/iconfont/iconSVG'

// 网络资源
const musciPath = 'http://m7.music.126.net/20210831162235/87a7652ff1d049ea6f19f70d28ad6b24/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3338741765/7266/3563/ee25/23947886151d49a69a2ff01a0f2c311c.'
const music = new Sound(musciPath,null,(error)=>{
  console.log(error);
  error && Alert.alert("播放失败...")
})

const MySound = () => {
  const [title, updateTitle] = useState(undefined)

  const getData = () => {
    updateTitle('111111111111')
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <TouchableOpacity activeOpacity={1}  style={styles.sound} onPress={()=>{music.play()}}>
      <Image style={styles.sound_picUrl}  source={{uri: 'http://p1.music.126.net/4NJvc1HOi4uv7cs4501Bjg==/109951166324714668.jpg',}}/>
      <Text style={styles.sound_musicNam} numberOfLines={1}>回春丹回春丹回春丹回春丹回春丹回春丹</Text>
      <TouchableOpacity onPress={()=>{music.play()}}>
        <SvgUri style={styles.input_icon} svgXmlData={icon_play} width={pxToDp(12)} height={pxToDp(12)}/>
      </TouchableOpacity>
      
        {/* 
        停止music.stop(()=>{music.release()})
        重新开始 music.stop(()=>{music.play()
         */}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  sound:{
      width:pxToDp(330),
      height:pxToDp(40),
      marginRight:pxToDp(20),
      marginLeft:pxToDp(20),
      position:'absolute',
      bottom:pxToDp(60),
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'rgba(0,0,0,0.8)',
      borderRadius:pxToDp(20)
    },
    sound_picUrl:{
      width:pxToDp(40),
      height:pxToDp(40),
      borderRadius:pxToDp(50)
    },
    sound_musicNam:{
      fontSize:pxToDp(12),
      color:'#fff',
      paddingLeft:pxToDp(10),
      maxWidth:pxToDp(180)
    },
    input_icon:{
      color:'#fff'
    }
})

export default MySound