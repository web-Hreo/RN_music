import request from '../utils/request'

// 获取 热点页-获取热门歌手
//limit: 取出数量 , 默认为 50
//offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
export function getArtists(params) {
  return request({
    url: `/top/artists`,
    method: 'get',
    params,
  })
}
//所有榜单
export function getTopList(params) {
  return request({
    url: `/toplist`,
    method: 'get',
    params,
  })
}
