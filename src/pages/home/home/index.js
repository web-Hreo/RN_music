import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TextInput,StatusBar,ScrollView,FlatList,TouchableOpacity } from 'react-native'
import {pxToDp} from '../../../utils/styleKitsKits'
// import {homepageBall,recommendSong} from '../../utils/pathMap';
import {homepageBall,recommendSong,recommendNewSong} from '../../../api/home'
import PublicTitle from '../../../components/publicTitle'
import RecommendNewSong from './recommendNewSong'
import {NavigationContext} from '@react-navigation/stack'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      ballList:[],//圆形图标入口列表
      recommendSong:[],//推荐歌单
      recommendNewSong:[],//推荐新音乐
      songList:[],//精品歌单列表
      recommendTitleInfo:{
        title:'推荐歌单',
        moreText:'更多'
      },
      randomTitleInfo:{
        title:'一首说唱，提神醒脑',
        moreText:'播放'
      }
    }
    this.homepageBall()
    this.getRecommendSong()
  }
  //获取 首页-发现-圆形图标入口列表
  async homepageBall(){
    const {data} = await homepageBall()
    this.setState({ ballList:data })
  }
  //获取 首页-发现-推荐歌单
  async getRecommendSong(){
    const {result} = await recommendSong({limit:6})
    this.setState({ recommendSong:result })
  }
  goReSongDetail =(item) =>{
    console.log(item);
    console.log(this.props);
    this.props.navigation.navigate('SongListDetail',{
      songId:item.id
    })
  }

  render() {
    const { ballList,recommendSong,recommendTitleInfo,randomTitleInfo } = this.state
    return (
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true}></StatusBar> */}
          <Image style={styles.tinyLogo}  source={{uri: 'https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/assets/image/article_bg/_14.jpg',}}/>
          <TextInput style={styles.search} placeholder="请输入歌单名称"></TextInput>

          {/* 圆形图标入口列表 */}
          <View  style={styles.ballScroll}>
            <FlatList 
              data={ballList}
              renderItem={this.renderIcon}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* 推荐歌单 */}
          <View style={styles.recommend}>
            <PublicTitle {...recommendTitleInfo}></PublicTitle>
            <View style={styles.list_cont}>
              <FlatList 
                data={recommendSong}
                renderItem={this.renderSong.bind(this)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* 推荐新音乐 */}
          <View style={{marginTop:pxToDp(10)}}>
            <RecommendNewSong />
          </View>
        </ScrollView>
      </View>
    )
  }
  //圆形图标入口列表
  renderIcon({item}){
    return(
      <View style={styles.ballBox}>
        <Image  style={styles.ballImg} source={{uri:item.iconUrl}} />
        <Text style={styles.ballText}>{item.name}</Text>
      </View>
    )
  }
  //推荐歌单
  renderSong({item}){
    return(
      <TouchableOpacity activeOpacity={0.9} onPress={() =>this.goReSongDetail(item)} style={styles.song_list} >
        <Image style={styles.songListImg} source={{uri:item.picUrl}} resizeMode="cover"></Image>
        <Text numberOfLines={2} style={styles.song_list_text}>{item.name}</Text>
      </TouchableOpacity> 
    )
  }
}

const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#1A1A1A',
    color:'#e5e5e5'
  },
  tinyLogo: {
    width: pxToDp(375),
    height: pxToDp(180),
  },
  search:{
    position:'absolute',
    left:pxToDp(20),
    right:pxToDp(20),
    height:pxToDp(40),
    top:pxToDp(110),
    borderRadius:pxToDp(5),
    paddingLeft:pxToDp(15)
  },
  // 圆形图标入口列表***************************************************
  ballScroll:{
    paddingTop:pxToDp(10),
    paddingBottom:pxToDp(10),
  },
  ballBox:{
    textAlign:'center',
    paddingRight:pxToDp(10),
    paddingLeft:pxToDp(10),
  },
  ballImg:{
    width:pxToDp(50),
    height:pxToDp(50),
    backgroundColor:'red',
    borderRadius:100
  },
  ballText:{
    paddingTop:pxToDp(5),
    textAlign:'center',
    fontSize:pxToDp(11),
    color:'#fff'
  },
  // 推荐***************************************************
  recommend:{
  },
  // ScrollView:{
  //   flex:1,
  //   marginTop:pxToDp(10),
  //   marginLeft:pxToDp(10),
  //   marginRight:pxToDp(10),
  //   // backgroundColor:"#ccc",
  //   borderRadius:pxToDp(5),
  // },
  list_cont:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:"flex-start",
    flexWrap:'wrap',
    marginTop:pxToDp(10),
    marginLeft:pxToDp(10),
    marginRight:pxToDp(10),
  },
  song_list:{
    //以下四个关键属性实现自动换行
    width: (pxToDp(375)-pxToDp(20))/3,
    paddingLeft:pxToDp(5),
    paddingRight:pxToDp(5),
    flexWrap: 'wrap',
    display:'flex',
    flexDirection: 'row',
  },
  songListImg:{
    width:(pxToDp(375)-pxToDp(30))/3,
    height:pxToDp(100),
    borderRadius:pxToDp(5),
  },
  song_list_text:{
    fontSize:pxToDp(12),
    paddingBottom:pxToDp(20),
    color:'#fff'
  },
  icon: {
    width: 26,height: 26,
  }
})
