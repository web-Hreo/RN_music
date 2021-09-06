import React, { useReducer,useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View,Image,ScrollView,FlatList,TouchableOpacity } from 'react-native'
import {pxToDp} from '../../../utils/styleKitsKits'
// import {homepageBall,recommendSong} from '../../utils/pathMap';
import {homepageBall,homepage,recommendSong,recommendNewSong} from '../../../api/home'
import PublicTitle from '../../../components/publicTitle'
import RecommendNewSong from './recommendNewSong'
import {NavigationContext} from '@react-navigation/stack'
const Home=(props)=>{
  const [bannerList,set_bannerList] = useState([])
  const [ballList,set_ballList] = useState([])
  const [recommendSongList,set_recommendSongList] = useState([])
  const [recommendNewSong,set_recommendNewSong] = useState([])
  const [songList,set_songList] = useState([])
  const recommendTitleInfo ={ title:'推荐歌单',moreText:'更多'}
  const randomTitleInfo ={ title:'一首说唱，提神醒脑',moreText:'播放'}

  //获取 首页-发现-banner列表
  const getHomepageBanner=async()=>{
    const {data} = await homepage()
    set_bannerList(data.blocks[0].extInfo.banners)
  }
  //获取 首页-发现-圆形图标入口列表
  const getHomepageBall=async()=>{
    const {data} = await homepageBall()
    set_ballList(data)
  }
  //获取 首页-发现-推荐歌单
  const getRecommendSong=async()=>{
    const {result} = await recommendSong({limit:6})
    set_recommendSongList(result)
  }
  //跳转详情页
  const goReSongDetail =(item) =>{
    props.navigation.navigate('SongListDetail',{
      songId:item.id
    })
  }
  const goDemo =()=>{
    props.navigation.navigate('SoundDemo')
  }

  useEffect(() => {
    getHomepageBanner()
    getHomepageBall()
    getRecommendSong()
  }, [])
  //banner_item
  const renderBanner=({item})=>{
    return(
      <View style={styles.banner_item}>
        <Image style={styles.tinyLogo}  source={{uri: item.pic}}/>
      </View>
    )
  }
    //圆形图标入口列表
  const renderIcon=({item})=>{
    return(
      <TouchableOpacity style={styles.ballBox} activeOpacity={0.9} onPress={() =>goDemo(item)}>
        <Image resizeMethod="resize" resizeMode="cover" style={styles.ballImg} source={{uri:item.iconUrl}} />
        <Text style={styles.ballText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  //推荐歌单
  const renderSong=({item})=>{
    return(
      <TouchableOpacity activeOpacity={0.9} onPress={() =>goReSongDetail(item)} style={styles.song_list} >
        <Image resizeMethod="resize" style={styles.songListImg} source={{uri:item.picUrl}} resizeMode="cover"></Image>
        <Text numberOfLines={2} style={styles.song_list_text}>{item.name}</Text>
      </TouchableOpacity> 
    )
  }
  return(
    <View style={styles.content}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* banner */}
      <View  style={styles.bannerScroll}>
        <FlatList 
          data={bannerList}
          renderItem={renderBanner}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={(item) => item.bannerId}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* 圆形图标入口列表 */}
      <View  style={styles.ballScroll}>
        <FlatList 
          data={ballList}
          renderItem={renderIcon}
          horizontal={true}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* 推荐歌单 */}
      <View style={styles.recommend}>
        <PublicTitle {...recommendTitleInfo}></PublicTitle>
        <View style={styles.list_cont}>
          <FlatList 
            data={recommendSongList}
            renderItem={renderSong}
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
export default Home

const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#1A1A1A',
    color:'#e5e5e5'
  },
  bannerScroll:{
    minHeight: pxToDp(150),
  },
  banner_item:{
    width: pxToDp(310),
    marginLeft:pxToDp(16)
  },
  tinyLogo: {
    width: pxToDp(310),
    height: pxToDp(150),
    borderRadius:pxToDp(10)
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
