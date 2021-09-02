import {INCREASE, DECREASE, RESET} from './actionsTypes';

// 同步action
const increase = () => ({type: INCREASE});
const decrease = () => ({type: DECREASE});
const reset = () => ({type: RESET});
// 异步action
const asyncincrease = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increase());
    }, 2000);
  };
};

export {increase, decrease, reset, asyncincrease};

