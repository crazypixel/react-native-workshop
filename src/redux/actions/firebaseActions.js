import * as consts from '../constants/actionTypes';

export const firebaseAction = (data, meta) => ({
  type: consts.FIREBASE,
  meta,
  data,
  payload: {}
});

export const setData = (data, meta) => ({
  type: consts.SET_DATA,
  meta,
  payload: { data }
});