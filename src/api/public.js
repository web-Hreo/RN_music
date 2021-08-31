import request from '../utils/request'

// 获取 首页-发现-圆形图标入口列表
//必选参数 : id : 音乐 id
//可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
export function getSongUrl(params) {
  return request({
    url: `/song/url`,
    method: 'get',
    params,
  })
}