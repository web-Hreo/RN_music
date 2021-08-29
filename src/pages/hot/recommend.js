//热点-推荐页
import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,ScrollView,RefreshControl } from 'react-native'
import {pxToDp,screenHeight} from '../../utils/styleKitsKits'
import {getArtists,getTopList} from '../../api/hot'



export default class recommend extends Component {
  constructor(props){
    super(props)
    this.state = {
      musicianList:[],
      rankingList:[]
    }
    this.getArtists()
    this.getTopList()
  }
  //获取 获取热门歌手
  async getArtists(){
    const {artists} = await getArtists({offset:0,limit:30})
    this.setState({ musicianList:artists })
  }
  //获取 获取榜单
  async getTopList(){
    const {list} = await getTopList()
    this.setState({ rankingList:list })
  }
  onRefreshHandle =() =>{
    this.getTopList()
    this.getArtists()
  }
  render() {
    const { musicianList,rankingList } = this.state
    return (
      <ScrollView style={styles.recommend} 
        refreshControl = {
          <RefreshControl 
            refreshing={ this.state.isRefreshing }
            onRefresh = {() => this.onRefreshHandle()}
          />
        }
      >
        {/* 热点列表 */}
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.hot} horizontal={true} pagingEnabled={true}>
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
        </ScrollView>

        {/* 推荐音乐人 */}
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.hot} horizontal={true} >
          {
            musicianList.map((it,i) =>{
              return(
                <View style={styles.musician_item}>
                  <Image style={styles.musician_avatar} source={{uri:it.img1v1Url}} />
                  <Text style={ styles.musician_name} numberOfLines={1}>{it.name}</Text>
                </View>
              )
            })
          }

        </ScrollView>
          
        {/* 音乐榜 */}
        <View style={styles.ranking_list}>
          {
            rankingList.map((it,i) =>{
              return(
                <View style={styles.ranking_item}>
                  <Image style={styles.musician_avatar} source={{uri:it.coverImgUrl}} />
                  <View>
                    <Text style={styles.ranking_name}>{it.name}</Text>
                    <Text numberOfLines={2} style={styles.ranking_desc}>{it.description}</Text>
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
