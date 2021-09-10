import React, { useReducer,useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View,Image,ScrollView } from 'react-native'
import {pxToDp} from '../../../utils/styleKitsKits'
import PublicTitle from '../../../components/publicTitle'
import {recommendNewSong} from '../../../api/home'
import {
  Button,
  Divider,
  Actionsheet,
  useDisclose,
  Center,
  NativeBaseProvider,
} from "native-base"
const RecommendNewSong=()=>{
  const { isOpen, onOpen, onClose } = useDisclose()
  const [songList,set_songList]=useState([])
  const [recommendSongList,set_recommendSongList]=useState([])
  const randomTitleInfo ={
    title:'最新音乐',
    moreText:'播放'
  }
  //获取 首页-发现-推荐歌单
  const getRecommendNewSong =async()=>{
    const {result} = await recommendNewSong({limit:9})
    console.log(result);
    result.forEach(it =>{
      const singerList = it.song.artists.map(item =>item.name)
      it.singer = singerList.join('/')
    })
    set_recommendSongList(result)
  }

  useEffect(()=>{
    getRecommendNewSong()
  },[])
  return (
    <View style={styles.newSong}>
      <Button onPress={onOpen}>Actionsheet</Button>

<Actionsheet isOpen={isOpen} onClose={onClose}>
  <Actionsheet.Content>
    <Divider borderColor="gray.300" />
    <Actionsheet.Item
      _text={{
        color: "blue.500",
      }}
    >
      Save
    </Actionsheet.Item>
    <Divider borderColor="gray.300" />
    <Actionsheet.Item
      _text={{
        color: "blue.500",
      }}
    >
      Delete
    </Actionsheet.Item>
  </Actionsheet.Content>
</Actionsheet>
      <PublicTitle {...randomTitleInfo} />
      <View style={styles.newSongBox}>
        {recommendSongList.map((it,i) =>{ return (
          <View style={styles.songItem} key={i}>
            <Image resizeMethod="resize" resizeMode="cover" style={styles.songImg} source={{uri:it.picUrl}} />
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
export default RecommendNewSong

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
