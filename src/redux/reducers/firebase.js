import { set } from 'lodash/fp';
import * as consts from '../constants/actionTypes';

const initialState = {};

const parsePath = (path) => {
  let result = path.substring(1);

  return result.replace('/', '.');
};

const firebaseReducer = (state = initialState, action) => {
  const { meta, payload } = action;

  if (action.type === consts.SET_DATA) {
    const path = parsePath(meta.path);

    return set(path, payload.data, state);
  }

  return state;

  switch (action.type) {
    default:
      return state;
  }
};

export default firebaseReducer;