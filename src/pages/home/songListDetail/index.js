import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, ScrollView,RefreshControl } from 'react-native'
import {songDetail} from '../../../api/home'
import { pxToDp } from '../../../utils/styleKitsKits'
import moment from 'moment'
import RecommendNewSong from '../home/recommendNewSong'

export default class SongListDetail extends Component {
  constructor(props){
    super(props)
    this.state={
      id:this.props.route.params.songId,
      playlist:{},//歌单数据
      tracks:{},
      creator:{},
      isRefreshing:false,
    }
    this.getRecommendSong()
  }
  async onRefreshHandle(){
    this.setState({ isRefreshing:true })
    await this.getRecommendSong()
    this.setState({ isRefreshing:false })
  }
  //获取 首页-发现-推荐歌单
  async getRecommendSong(){
    const {id}= this.state
    const {playlist} = await songDetail({id})
    playlist.updateTimeMoment = moment(playlist.updateTime).format('YYYY-MM-DD HH:MM')
    console.log(playlist);
    this.setState({
      playlist,
      tracks:playlist.tracks,
      creator:playlist.creator
    })
    console.log('this.state.tracks',this.state.tracks);
  }
  render() {
    const { playlist,tracks,creator } = this.state
    console.log('tracks',tracks);
    return (
      <ScrollView style={styles.songList_detail} 
        refreshControl = {
          <RefreshControl 
            refreshing={ this.state.isRefreshing }
            onRefresh = {() => this.onRefreshHandle()}
          />
        }
      >
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
              <View style={styles.songItem} key={i}>
              <Image style={styles.songImg} source={{uri:it.al.picUrl}} />
              <View>
                <Text numberOfLines={1} style={styles.songName}>{it.al.name}</Text>
                <Text style={styles.songSinger}>{it.ar[0].name}</Text>
              </View>
            </View>
            )
          })
        }
        </View>
      </ScrollView>
    )
  }
}

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
