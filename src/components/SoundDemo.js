import React, { useReducer,useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import store from '../../redux/store';
import { connect } from 'react-redux';
import {getSongUrl} from '../api/public';
import Sound from 'react-native-sound';
import {changeSong,controlPlay,set_songId,songName,singerName} from '../../redux/actions';


const Player = (props) =>{
  const [List,set_List]=useState([])
  const [order,set_order]=useState(0)
  const [currentSong,set_currentSong]=useState({})
  const [playing,set_playing]=useState(false)
  const [uri,set_uri]=useState('')
  const [playInBackground,set_playInBackground]=useState(true)
  const [singleLoop,set_singleLoop]=useState(true)
  let whoosh = {}

  const getUri=async()=>{
    let whoosh = {}
    let Id = props.songId
    console.log(props);
    const musicUrl = await getSongUrl({id:33894312})
    console.log(musicUrl.data[0].url);
    set_uri(musicUrl.data[0].url)
    if (whoosh.release) {
      whoosh.release()
    }
    whoosh = new Sound(musicUrl.data[0].url, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      whoosh.setVolume(1);
      whoosh.setNumberOfLoops(-1);
      // 播放完成后的回调，当Loops为无限时不会触发
      whoosh.play((success) => {
          if (success) {
              store.dispatch(controlPlay(store.getState().songOrder + 1));
          } else {
              whoosh.reset();
          }
      });
    });
  }
  useEffect(()=>{
    getUri()
  },[props.songId])

  const pause=()=> {
    whoosh.pause();
    set_playing(false)
  }
  const play=()=> {
    if (whoosh.play) {
     whoosh.play((success) => {
        if (success) {
          // console.warn('successfully finished playing');
        } else {
          // console.warn('playback failed due to audio decoding errors');
         whoosh.reset();
        }
      });
     set_playing(true)
    }
  }
  const isSingleLoop=()=> {
    // 设歌曲无限次播放
   whoosh.setNumberOfLoops && whoosh.setNumberOfLoops(-1)
   whoosh.setNumberOfLoops && set_singleLoop(true)
  }
  const listLoop=()=> {
    // 设歌曲只播放一次，使触发play方法中的播放结束后的播放下一首的回调函数
   whoosh.setNumberOfLoops && whoosh.setNumberOfLoops(0)
   whoosh.setNumberOfLoops && set_singleLoop(false)
  }
  return(
    <View style={styles.wrapper}>
      {/* <View>
        <Text style={styles.songName}>{props.songName ? props.songName : '点击下一条评论'}</Text>
        <Text style={styles.author}>{props.singerName ? props.singerName : '开始播放歌曲'}</Text>
      </View> */}
      <View style={styles.btn}>
          {singleLoop ? (
            <TouchableOpacity style={styles.loop} onPress={() => { listLoop() }} >
              <Text>123</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.loop} onPress={() => { isSingleLoop() }} >
              <Text>123</Text>
            </TouchableOpacity>
          )}
          {playing ? (
            <TouchableOpacity style={styles.button} onPress={() => { pause() }} >
              <Text>123</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => { play() }} >
              <Text>123</Text>
            </TouchableOpacity>
          )}
      </View>
    </View>
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
)(Player)

const styles = StyleSheet.create({
  btn: {
      flexDirection: 'row',
  },
  wrapper: {
      position: 'absolute',
      bottom: 25,
      height: 50,
      width: Dimensions.get('window').width,
      backgroundColor: '#ffffff',
      justifyContent: 'space-between',
      flexDirection: 'row',
  },
  button: {
      position: 'relative',
      width: 38,
      height: 38,
      marginRight: 30,
      top: 3
  },
  loop: {
      position: 'relative',
      width: 30,
      height: 30,
      marginRight: 20,
      top: 5,
  },
  backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0
  },
  songName: {
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 5
  },
  author: {
      marginLeft: 20
  }
})
