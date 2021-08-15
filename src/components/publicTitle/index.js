import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {pxToDp} from '../../utils/styleKitsKits'

export default class PublicTitle extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const  { title,moreText } = this.props
    return (
      <View style={styles.titleBox}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.btn}> {moreText} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleBox:{
    flexDirection:'row',
    width:pxToDp(375),
    justifyContent:"space-between",
    paddingTop:pxToDp(8),
    paddingBottom:pxToDp(8),
    paddingRight:pxToDp(10),
    paddingLeft:pxToDp(10),
  },
  title:{
    fontSize:pxToDp(20),
    fontWeight:'bold'
  },
  btn:{
    fontSize:pxToDp(12),
    width:pxToDp(50),
    height:pxToDp(20),
    textAlign:'center',
    lineHeight:pxToDp(20),
    borderWidth:pxToDp(0.5),
    borderStyle:'solid',
    borderColor:'#999',
    borderRadius:pxToDp(10),
  }
})
