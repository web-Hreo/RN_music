import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import {songDetail} from '../../../api/home'

export default class SongListDetail extends Component {
  constructor(props){
    super(props)
    this.state={
      id:this.props.route.params.songId,
      playlist:{}//歌单数据
    }
    this.getRecommendSong()
  }
  //获取 首页-发现-推荐歌单
  async getRecommendSong(){
    const {id}= this.state
    const {playlist} = await songDetail({id})
    this.setState({ playlist,tracks:playlist.tracks })
    console.log(this.state.playlist);
    console.log(this.state.tracks);
  }
  render() {
    const { playlist,tracks } = this.state
    return (
      <View>
        <Image style={styles.tinyLogo} source={{uri:playlist.coverImgUrl}}></Image>
        <Text> {playlist.name} </Text>
        <Text> {playlist.description} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,height: 100,
  }
})
