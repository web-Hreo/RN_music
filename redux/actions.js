import {CHANGE,CONTROL,ID,NAME,SINGER} from './actionsTypes';

export const changeSong = songList => ({
  type: CHANGE,
  songList
})
export const controlPlay = songOrder => ({
  type: CONTROL,
  songOrder
})
export const set_songId = songId => ({
  type: ID,
  songId
})
export const songName = songName => ({
  type: NAME,
  songName
})
export const singerName = singerName => ({
  type: SINGER,
  singerName
})

