import * as consts from '../constants/actionTypes';
import fbManager from '../../firebase/fbManager';

const firebaseMiddleware = store => next => action => {
  const { type, meta, data } = action;

  if (type === consts.FIREBASE) {
    fbManager.fire({ meta, data });
  }

  next(action);
};

export default firebaseMiddleware;