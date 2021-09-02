import {combineReducers} from 'redux';
import {SET_SONG_URL} from './actionsTypes';
// 原始默认state
const defaultState = {
  songUrl:'',
};

function counter(state = defaultState, action) {
  switch (action.type) {
    case SET_SONG_URL://改变音乐链接
      console.log('action--------------------',action);
      return {...state, songUrl:action.data };
    default:
      return state;
  }
}

export default combineReducers({
  counter,
});

