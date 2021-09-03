/*
 * @Author: your name
 * @Date: 2021-08-27 10:42:35
 * @LastEditTime: 2021-09-03 16:54:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SM_SEARCH_APPd:\_SM_CODE\_React_Nactive\RN_music\src\api\home.js
 */
import request from '../utils/request'

// 获取 首页-发现-调用此接口 , 可获取APP首页信息 refresh: 是否刷新数据,默认为false  cursor: 上一条数据返回的cursor
export function homepage(params) {
  return request({
    url: `/homepage/block/page`,
    method: 'get',
    params,
  })
}
// 获取 首页-发现-圆形图标入口列表
export function homepageBall(params) {
  return request({
    url: `/homepage/dragon/ball`,
    method: 'get',
    params,
  })
}
// 获取 首页-发现-推荐歌单 limit: 取出数量 , 默认为 30 (不支持 offset)
export function recommendSong(params) {
  return request({
    url: `/personalized`,
    method: 'get',
    params,
  })
}
// 获取 首页-发现-推荐新音乐 limit: 取出数量 , 默认为 30 (不支持 offset)
export function recommendNewSong(params) {
  return request({
    url: `/personalized/newsong`,
    method: 'get',
    params,
  })
}
// 获取 首页-发现-歌单详情页-获取歌单详情 id : 歌单 id s : 歌单最近的 s 个收藏者,默认为8
export function songDetail(params) {
  return request({
    url: `/playlist/detail`,
    method: 'get',
    params,
  })
}
// 获取精品歌单
export function hotPlayList(params) {
  return request({
    url: `//top/playlist/highquality`,
    method: 'get',
    params,
  })
}
