import firebase from 'firebase';
import { setData } from '../redux/actions/firebaseActions';

class FirebaseManager {
  init(config, store) {
    this.dispatch = store.dispatch;

    firebase.initializeApp(config);
  }

  fire(config) {
    const { meta } = config;

    switch (meta.method) {
      case 'SET':
        this.set(config);
        break;
      case 'SUBSCRIBE':
        this.subscribe(config);
        break;
      default:
        console.warn(`REDUX-FIREBASE - Unknown method: ${meta.method}`);
        break;
    }
  }

  set({ meta, data }) {
    firebase.database().ref(meta.path).set(data);
  }

  subscribe({ meta }) {
    const ref = firebase.database().ref(meta.path);

    ref.on('value', (snapshot) => {
      this.dispatch(setData(snapshot.val(), meta));
    });
  }
}

const instance = new FirebaseManager();

export default instance;