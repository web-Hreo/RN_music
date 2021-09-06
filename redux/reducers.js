import {combineReducers} from 'redux';
import {CHANGE,CONTROL,ID,NAME,SINGER} from './actionsTypes';
// 原始默认state
const initialState = {
  songOrder: 0,
  songList: [],
  songId: '',
  songName: '',
  singerName: ''
}

const NeatMusicReducer = function (state = initialState, action) {
  switch (action.type) {
      case CHANGE:
        return {...state, songList:action.songList };
      case CONTROL:
        return {...state, songOrder:action.songOrder };
      case ID:
        return {...state, songId:action.songId };
      case NAME:
        return {...state, songName:action.songName };
      case SINGER:
        return {...state, singerName:action.singerName };
      default:
        return state;
  }
}


export default combineReducers({
  NeatMusicReducer,
});


