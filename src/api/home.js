import request from '../utils/request'

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
