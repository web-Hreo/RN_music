import React, { useReducer,useState, useEffect, useRef } from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,Alert} from 'react-native';
import Sound from 'react-native-sound';
import {pxToDp} from '../utils/styleKitsKits'
import SvgUri from "react-native-svg-uri";
import {icon_play} from '../assets/iconfont/iconSVG'
import {connect} from 'react-redux';


const MySound = (props) => {
  const [musicPath, set_musicPath] = useState('http://m801.music.126.net/20210903003803/64e3d9c456ee48ccb198297432ac4ccb/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/10455510134/f89a/cb0f/0394/484a2505c45e5249ab114a3f0c21fc8a.mp3')
  let music
  music = new Sound(props.songUrl,null,(error)=>{
    error &&console.log(error);
  })

  // 网络资源
  const play  =()=>{
    console.log('冲啊。。。。。。。。。。。。');
    setTimeout(()=>{
      music.stop(()=>{
        music.play();
      });
    },500) 
  }
  useEffect(() => {
    console.log('MySound-props',props.songUrl);
    
    if(props.songUrl){
      set_musicPath(props.songUrl)
      console.log('music',music);
      // loaded successfully
      play()
  console.log('duration in seconds: ' + music.getDuration() + 'number of channels: ' + music.getNumberOfChannels());
    }
  }, [props.songUrl,musicPath])

  return (
    <TouchableOpacity activeOpacity={1}  style={styles.sound} >
      <Image style={styles.sound_picUrl}  source={{uri: 'http://p1.music.126.net/4NJvc1HOi4uv7cs4501Bjg==/109951166324714668.jpg',}}/>
      <Text style={styles.sound_musicNam} numberOfLines={1}>回春丹回春丹回春丹回春丹回春丹回春丹</Text>
      <TouchableOpacity onPress={()=>play()}>
        <SvgUri style={styles.input_icon} svgXmlData={icon_play} width={pxToDp(12)} height={pxToDp(12)}/>
      </TouchableOpacity>
      
        {/* 
        停止music.stop(()=>{music.release()})
        重新开始 music.stop(()=>{music.play()
         */}
    </TouchableOpacity>
  )
}

export default connect(
  state =>({songUrl: state.counter.songUrl})//是一个函数
)(MySound)

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
      backgroundColor:'rgba(0,0,0,0.9)',
      borderRadius:pxToDp(20)
    },
    sound_picUrl:{
      width:pxToDp(38),
      height:pxToDp(38),
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

