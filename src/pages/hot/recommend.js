//热点-推荐页
import React, { useReducer,useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View,Image,ScrollView,RefreshControl,FlatList } from 'react-native'
import {pxToDp,screenHeight} from '../../utils/styleKitsKits'
import {getArtists,getTopList} from '../../api/hot'

const Recommend = () =>{
  const hotList = [
    { id:1,title:'披荆斩棘的哥哥',name:'小哥哥',desc:'看了一集 真好看 看了一集 真好看 看了一集 真好看看了一集 真好看 看了一集 真好看 看了一集 真好看' },
    { id:2,title:'披荆斩棘的哥哥',name:'小哥哥',desc:'看了一集 真好看 看了一集 真好看 看了一集 真好看看了一集 真好看 看了一集 真好看 看了一集 真好看' },
    { id:3,title:'披荆斩棘的哥哥',name:'小哥哥',desc:'看了一集 真好看 看了一集 真好看 看了一集 真好看看了一集 真好看 看了一集 真好看 看了一集 真好看' },
    { id:4,title:'披荆斩棘的哥哥',name:'小哥哥',desc:'看了一集 真好看 看了一集 真好看 看了一集 真好看看了一集 真好看 看了一集 真好看 看了一集 真好看' },
  ]
  const [musicianList,set_musicianList] = useState([])
  const [rankingList,set_rankingList] = useState([])
  const [isRefreshing,setIsRefreshing] = useState(false)//是否处于刷新状态


  //获取 获取热门歌手
  const getHotArtists =async() =>{
    const {artists} = await getArtists({offset:0,limit:30})
    set_musicianList(artists)
    console.log('artists',artists);
  }
  //获取 获取榜单
  const getHotTopList =async() =>{
    const {list} = await getTopList()
    set_rankingList(list)
  }
  const onRefreshHandle =() =>{
    setIsRefreshing(true)
    getHotTopList()
    getHotArtists()
    setIsRefreshing(false)
  }

  useEffect(()=>{
    getHotArtists()
    getHotTopList()
  },[isRefreshing])

  const renderHotItem =({item})=>{
    return(
      <View style={styles.hot_item}>
        <Text style={ styles.hot_title}>披荆斩棘的哥哥</Text>
        <View style={styles.hot_userInfo}>
          <Image style={styles.hot_avatar} source={{uri:'https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/static/avatar.jpg'}} />
          <Text style={ styles.hot_userInfo_name}>小弟弟</Text>
        </View>
        <View>
        <Text style={ styles.hot_userInfo_desc}>看了一集 真好看 看了一集 真好看 看了一集 真好看 看了一集 真好看</Text>
        </View>
      </View>
    )
  }
  const renderMusicianItem =({item})=>{
    return(
      <View style={styles.musician_item}>
        <Image style={styles.musician_avatar} source={{uri:item.img1v1Url}} />
        <Text style={ styles.musician_name} numberOfLines={1}>{item.name}</Text>
      </View>
    )
  }
  const renderRankItem =({item})=>{
    return(
      <View style={styles.ranking_item}>
        <Image style={styles.musician_avatar} source={{uri:item.coverImgUrl}} />
        <View>
          <Text style={styles.ranking_name}>{item.name}</Text>
          <Text numberOfLines={2} style={styles.ranking_desc}>{item.description}</Text>
        </View>
      </View>
    )
  }

  return(
    <ScrollView style={styles.recommend} 
      refreshControl = {
        <RefreshControl 
          refreshing={ isRefreshing }
          onRefresh = {() => onRefreshHandle()}
        />
    }
  >
    {/* 热点列表 */}
    <FlatList 
      showsHorizontalScrollIndicator={false}
      style={styles.hot}
      horizontal={true}
      pagingEnabled={true}
      data={hotList}
      renderItem={renderHotItem}
    />
    {/* 推荐音乐人 */}
    <FlatList 
      showsHorizontalScrollIndicator={false}
      style={styles.hot}
      horizontal={true}
      data={musicianList}
      renderItem={renderMusicianItem}
    />
    {/* 音乐榜 */}
    <FlatList 
      style={styles.hot}
      data={rankingList}
      renderItem={renderRankItem}
    />

  </ScrollView>
  )
}


export default Recommend

const styles = StyleSheet.create({
  recommend:{
    backgroundColor:'#1A1A1A',
  },
  hot:{
    marginTop:pxToDp(20)
  },
  hot_item:{
    width: pxToDp(340),
    // height: pxToDp(200),
    backgroundColor:'#050505',
    padding:pxToDp(15),
    borderRadius:pxToDp(10),
    marginLeft:pxToDp(16)
  },
  hot_title:{
    fontSize:pxToDp(20),
    color:'#fff',
  },
  hot_userInfo:{
    paddingTop:pxToDp(20),
    flexDirection:'row',
    alignItems:'center'
  },
  hot_avatar:{
    width: pxToDp(25),
    height: pxToDp(25),
    borderRadius:pxToDp(40)
  },
  hot_userInfo_name:{
    fontSize:pxToDp(12),
    color:'#fff',
    paddingLeft:pxToDp(10)
  },
  hot_userInfo_desc:{
    fontSize:pxToDp(12),
    color:'#fff',
    paddingTop:pxToDp(10)
  },
  musician_item:{
    marginLeft:pxToDp(16),
    alignItems:'center'
  },
  musician_avatar:{
    width: pxToDp(60),
    height: pxToDp(60),
    borderRadius:pxToDp(50)
  },
  musician_name:{
    fontSize:pxToDp(14),
    color:'#ccc',
    maxWidth:pxToDp(50)
  },
  ranking_item:{
    width: pxToDp(350),
    backgroundColor:'#2a2a2a',
    marginLeft:pxToDp(12.5),
    marginRight:pxToDp(12.5),
    marginTop:pxToDp(10),
    flexDirection:'row',
    alignItems:'center',
    padding:pxToDp(10),
    borderRadius:pxToDp(10)
  },
  ranking_name:{
    color:'#fff',
    paddingLeft:pxToDp(10),
  },
  ranking_desc:{
    color:'#fff',
    paddingTop:pxToDp(10),
    maxWidth:pxToDp(250),
    paddingLeft:pxToDp(10),
  }
})
