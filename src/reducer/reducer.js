import {
  songUrl,
  list,
} from './actions'
export const initState = {
  songUrl: '',
  list: [],
}
export const initReducer = (state, {type, data}) => {
  switch (type) {
    case list:
      return {
        ...state,
        list: data
      }
    case songUrl:
      return {
        ...state,
        songUrl: data
      }
    default:
      return state
  }
}