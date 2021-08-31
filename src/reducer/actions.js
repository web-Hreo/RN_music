
export const songUrl = 'SONG_URL'
export const list = 'LIST'
export const setSongUrl = (data) => ({
  type: songUrl,
  data
})
export const updateList = (data) => ({
  type: list,
  data
})
