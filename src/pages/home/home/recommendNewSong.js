import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,ScrollView } from 'react-native'
import {pxToDp} from '../../../utils/styleKitsKits'
import PublicTitle from '../../../components/publicTitle'
import {recommendNewSong} from '../../../api/home'



export default class RecommendNewSong extends Component {
  constructor(props){
    super(props)
    this.state = {
      songList:[],
      randomTitleInfo:{
        title:'最新音乐',
        moreText:'播放'
      },
      recommendNewSong:[]
    }
    this.getRecommendNewSong()
  }
  //获取 首页-发现-推荐歌单
  async getRecommendNewSong(){
    const {result} = await recommendNewSong({limit:9})
    console.log(result);
    result.forEach(it =>{
      const singerList = it.song.artists.map(item =>item.name)
      it.singer = singerList.join('/')
    })
    this.setState({ recommendNewSong:result })
  }
  render() {
    const  { randomTitleInfo,recommendNewSong } =this.state
    return (
      <View style={styles.newSong}>
        <PublicTitle {...randomTitleInfo} />
        <View style={styles.newSongBox}>
          {recommendNewSong.map((it,i) =>{ return (
            <View style={styles.songItem} key={i}>
              <Image style={styles.songImg} source={{uri:it.picUrl}} />
              <View>
                <Text style={styles.songName}>{it.name}</Text>
                <Text style={styles.songSinger}>{it.singer}</Text>
              </View>
            </View>
          )
          })}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  newSong:{
  },
  newSongBox:{
    paddingLeft:pxToDp(10),
    paddingRight:pxToDp(10),
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
