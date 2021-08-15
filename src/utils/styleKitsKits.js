//设计稿的宽度 / 元素的宽度  = 手机屏幕 / 手机中元素的宽度
// 750px / 10px = 375dp / ?

//手机中元素的宽度 =手机屏幕 *  元素的宽度 /设计稿的宽度
//手机中元素的宽度 = (750px/10px) * 375dp

import { Dimensions } from 'react-native'

//设计稿的宽度
const designWidth = 375
//屏幕宽度
export const screenWidth = Dimensions.get('window').width;
//屏幕高度
export const screenHeight = Dimensions.get('window').height;

/**
 * px转dp
 * @param {Number} elePx 元素的宽度或高度 单位 px
 */
export const pxToDp = (elePx) => screenWidth * elePx / designWidth;
