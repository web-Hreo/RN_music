import React, { useReducer,useState, useEffect, useRef } from 'react';
import { Text, View,StyleSheet,Image,ImageBackground,ScrollView,RefreshControl } from 'react-native'
import {pxToDp,screenWidth} from '../../utils/styleKitsKits'
import {icon_song_list,icon_like,icon_download,icon_recently_played} from '../../assets/iconfont/iconSVG'
import SvgUri from "react-native-svg-uri";

const My=()=>{
  const [isRefreshing,setIsRefreshing] = useState(false)//是否处于刷新状态
  const optionList=[
    { id:1,name:'歌单',icon:icon_song_list,num:20,imgUrl:'http://p4.music.126.net/8xs1V2vPJpb8ywOrlYQFBA==/5868093557713841.jpg' },
    { id:2,name:'喜欢',icon:icon_like,num:20,imgUrl:'http://p4.music.126.net/S2XP4CA6cufFlmfcJDtPBw==/109951162794947616.jpg' },
    { id:3,name:'下载',icon:icon_download,num:20,imgUrl:'http://p3.music.126.net/gA6MMdcY7WRNm0bs3W4E7w==/18651015743968707.jpg' },
    { id:4,name:'最近播放',icon:icon_recently_played,num:20,imgUrl:'http://p4.music.126.net/XSBhVytfbKq3i0xnGoV4_w==/109951162962837544.jpg' },
  ]

  //下拉刷新
  const onRefreshHandle  = async() =>{
    setIsRefreshing(true)
    setIsRefreshing(false)
  }

  useEffect(() => {
    console.log(optionList);
  }, [isRefreshing])

  return(
    <View style={styles.content}>
      <ScrollView
        refreshControl = {
          <RefreshControl 
            refreshing={ isRefreshing }
            onRefresh = {() => onRefreshHandle()}
          />
        }
      >
        {/* 头部 */}
        <View style={styles.my_info}>
          <View style={styles.text_box}>
            <Text style={[styles.my_text,styles.my_num]}>1000</Text>
            <Text style={[styles.my_text_999,styles.my_num_text]}>关注</Text>
          </View>
          <View>
            <Image resizeMethod="resize" style={styles.my_avatar} source={{uri:'http://p4.music.126.net/csywqB-1I7RriFpJqTzpBQ==/3434874326295928.jpg'}}></Image>
          </View>
          <View style={styles.text_box}>
            <Text style={[styles.my_text,styles.my_num]}>15.4万</Text>
            <Text style={[styles.my_text_999,styles.my_num_text]}>粉丝</Text>
          </View>
        </View>
        {/* 名字 */}
        <Text style={[styles.my_text,styles.my_name]}>小何不爱敲代码</Text>

        {/* 选项 */}
        <View style={styles.my_option}>
          {
            optionList.map((item,key)=>{
              return(
                <View style={styles.my_option_item} key={key}>
                  <ImageBackground  style={styles.item_bg} source={{uri:item.imgUrl}}>
                    {/* <SvgUri style={styles.option_icon} svgXmlData={item.icon} width={pxToDp(30)} height={pxToDp(30)}/>
                    <Text style={styles.item_num}>{item.num}</Text> */}
                  </ImageBackground>
                  <Text style={styles.item_name}>{item.name}</Text>
                </View>
              )
            })
          }

        </View>
      </ScrollView>
    </View>
  )
}
export default My
const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#1A1A1A',
    color:'#e5e5e5',
  },
  my_info: {
    marginTop:pxToDp(20),
    width:pxToDp(375),
    flexDirection:'row',
    alignItems:'center'
  },
  text_box:{
    alignItems:'center',
    width:pxToDp(127.5),
  },
  my_num:{
    fontWeight:'bold'
  },
  my_num_text:{
    fontSize:pxToDp(12),
    marginTop:pxToDp(5),
    width:pxToDp(127.5),
    textAlign:'center',
  },
  my_text:{
    color:'#fff',
    fontSize:pxToDp(15)
  },
  my_text_999:{
    color:'#999'
  },
  my_avatar:{
    width:pxToDp(120),
    height:pxToDp(120),
    borderRadius:pxToDp(100)
  },  
  my_name:{
    marginTop:pxToDp(2),
    fontSize:pxToDp(17),
    textAlign:'center',
  },
  item_bg:{
    width:pxToDp(125),
    height:pxToDp(125),
    borderRadius:pxToDp(15),
    overflow:'hidden',
    alignItems:'center'
  },
  my_option:{
    marginTop:pxToDp(36),
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap',
    width:screenWidth,
    paddingLeft:pxToDp(20),
    paddingRight:pxToDp(20),
  },
  my_option_item:{
    width:pxToDp(125),
    marginBottom:pxToDp(20)
  },
  item_name:{
    marginTop:pxToDp(4),
    color:'#FFF',
    textAlign:'center'
  },
  option_icon:{
    color:'#FFF',
  },
  item_num:{
    fontSize:pxToDp(15),
    color:'#fff'
  }
})
