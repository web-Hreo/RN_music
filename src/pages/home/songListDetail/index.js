import React, { useReducer,useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View,Image, ScrollView,RefreshControl,TouchableOpacity } from 'react-native'
import {songDetail} from '../../../api/home'
import {getSongUrl} from '../../../api/public'
import { pxToDp } from '../../../utils/styleKitsKits'
import { setSongUrl} from '../../../reducer/actions'
import {initState, initReducer} from '../../../reducer/reducer'
import moment from 'moment'

const SongListDetail = (props) =>{
  
  const [state, dispatch] = useReducer(initReducer, initState)

  const id  = props.route.params.songId
  const [playlist,setPlayList] = useState([])//歌单数据
  const [tracks,setTracks] = useState({})//推荐新音乐
  const [creator,setCreator] = useState({})//用户数据
  const [isRefreshing,setIsRefreshing] = useState(false)//是否处于刷新状态

  //下拉刷新
  const onRefreshHandle  = async() =>{
    setIsRefreshing(true)
    await getRecommendSong()
    setIsRefreshing(false)
  }

  //获取 首页-发现-推荐歌单
  const getRecommendSong = async() =>{
    const {playlist} = await songDetail({id})
    playlist.updateTimeMoment = moment(playlist.updateTime).format('YYYY-MM-DD HH:MM')
    setPlayList(playlist)
    setTracks(playlist.tracks)
    setCreator(playlist.creator)
  }
  //更改全局音乐变量 
  const musicPlay = async(it)=>{
    console.log(it);
    const {data} = await getSongUrl({id:it.id})
    console.log(data[0].url);
    dispatch(setSongUrl(data[0].url))
    console.log('state.list',state.songUrl);
  }

  useEffect(() => {
    getRecommendSong()
    console.log('useEffect state.list',state.songUrl);
  }, [isRefreshing])

  return (
    <ScrollView style={styles.songList_detail} 
      refreshControl = {
        <RefreshControl 
          refreshing={ isRefreshing }
          onRefresh = {() => onRefreshHandle()}
        />
      }
    > 
      <Text>{state.songUrl}</Text>
      <Image style={styles.tinyLogo} source={{uri:playlist.coverImgUrl}}></Image>
      <Text style={[styles.detail_text,styles.detail_time]}>更新于{playlist.updateTimeMoment} </Text>
      <Text style={[styles.detail_text,styles.detail_name]}>{playlist.name}</Text>
      {/* 用户 */}
      <View style={styles.creator}>
        <Image style={styles.creator_avatar} source={{uri:creator.avatarUrl}}></Image>
        <Text style={[styles.creator_text]}>{creator.nickname}</Text>
      </View>
      {/* 详情 */}
      <Text style={[styles.detail_text,styles.detail_description]}>{playlist.description}</Text>
      <Text style={[styles.detail_text,styles.detail_time]}>播放 {playlist.playCount}    喜欢 {playlist.subscribedCount}</Text>

      {/* 推荐新音乐 */}
      <View style={{marginTop:pxToDp(10)}}>
      {
        tracks.length>0 && tracks.map((it,i) =>{
          return(
            <TouchableOpacity activeOpacity={0.8} onPress={() =>musicPlay(it)} style={styles.songItem} key={i}>
            <Image style={styles.songImg} source={{uri:it.al.picUrl}} />
            <View>
              <Text numberOfLines={1} style={styles.songName}>{it.al.name}</Text>
              <Text style={styles.songSinger}>{it.ar[0].name}</Text>
            </View>
          </TouchableOpacity>
          )
        })
      }
      </View>
    </ScrollView>
  )
}
export default SongListDetail

const styles = StyleSheet.create({
  songList_detail:{
    // flex:1,
    backgroundColor:'#1A1A1A',
    color:'#fff',
    paddingLeft:pxToDp(16),
    paddingRight:pxToDp(16),
  },
  tinyLogo: {
    width:pxToDp(200),
    height: pxToDp(200),
    borderRadius:pxToDp(10),
    marginTop:pxToDp(20),
    marginLeft:pxToDp(71.5),
    marginRight:pxToDp(71.5),
  },
  detail_text:{
    color:'#fff'
  },
  detail_time:{
    marginTop:pxToDp(10),
    fontSize:pxToDp(13),
    color:'#999',
  },
  detail_name:{
    marginTop:pxToDp(10),
    fontSize:pxToDp(20),
  },
  creator_avatar:{
    width:pxToDp(30),
    height:pxToDp(30),
    borderRadius:pxToDp(50),
  },
  creator:{
    marginTop:pxToDp(10),
    flexDirection:'row',
    alignItems:'center'
  },
  creator_text:{
    color:'#fff',
    paddingLeft:pxToDp(10)
  },
  detail_description:{
    marginTop:pxToDp(10),
    fontSize:pxToDp(13),
    color:'#999',
  },

  songItem:{
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:pxToDp(10)
  },
  songImg:{
    width:pxToDp(50),
    height:pxToDp(50),
    backgroundColor:'#000',
    borderRadius:pxToDp(6)
  },
  songName:{
    width: pxToDp(280),
    paddingLeft:pxToDp(10),
    fontSize:pxToDp(15),
    color:'#fff'
  },
  songSinger:{
    paddingLeft:pxToDp(10),
    fontSize:pxToDp(12),
    color:'#999'
  }
})
