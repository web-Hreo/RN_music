import React, { useReducer,useState, useEffect, useRef } from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,Alert} from 'react-native';
import Sound from 'react-native-sound';
import {pxToDp} from '../utils/styleKitsKits'
import SvgUri from "react-native-svg-uri";
import {icon_play} from '../assets/iconfont/iconSVG'
import {connect} from 'react-redux';
import {getSongUrl} from '../api/public'
import {changeSong,controlPlay,set_songId,songName,singerName} from '../../redux/actions';




const MySound = (props) => {
  const [musicPath, set_musicPath] = useState('http://m7.music.126.net/20210906111931/535e78d43a43f647c2dbca9ec0add724/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3')
  let whoosh = {}

  // 网络资源
  const play  =()=>{
        music.play();
  }
  const changeUrl=(songId)=>{
    console.log(songId);
  }
  useEffect(async () => {
    let whoosh = {}
    console.log('====================================');
    console.log('接受到redux的props.songId',props.songId);
    console.log('====================================');
    const musicUrl = await getSongUrl({id:props.songId})
    console.log(musicUrl.data[0].url);
    if(props.songId){
      console.log('whoosh',whoosh);
      if (whoosh.release) { 
        console.log('当前存在音乐 需要释放');
        whoosh.release()
       };
      whoosh = new Sound(musicUrl.data[0].url, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error)
          return
        }
        console.log(whoosh)
        whoosh.setVolume(1)
        whoosh.setNumberOfLoops(-1)
        // 播放完成后的回调，当Loops为无限时不会触发
          whoosh.play()
      })
    }
  }, [props.songId,musicPath])

  return (
    <TouchableOpacity activeOpacity={1}  style={styles.sound} >
      <Image style={styles.sound_picUrl}  source={{uri: 'http://p1.music.126.net/4NJvc1HOi4uv7cs4501Bjg==/109951166324714668.jpg',}}/>
      <Text style={styles.sound_musicNam} numberOfLines={1}>回春丹回春丹回春丹回春丹回春丹回春丹</Text>
      <TouchableOpacity onPress={()=>music.play()}>
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
  store =>({
    songList: store.NeatMusicReducer.songList,
    songOrder: store.NeatMusicReducer.songOrder,
    songId: store.NeatMusicReducer.songId,
    singerName: store.NeatMusicReducer.singerName
  }),//是一个函数
  {
    changeSong,
    controlPlay,
    set_songId,
    songName,
    singerName
  }
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

