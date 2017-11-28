import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import fbManager from './src/firebase/fbManager';

// VIEWS
import Welcome from './src/views/welcome';
import List from './src/views/list';
import NewItem from './src/views/newItem';

const App = StackNavigator({
  Welcome: { screen: Welcome },
  List: { screen: List },
  NewItem: { screen: NewItem }
}, { headerMode: 'none' });

export default class EnhancedApp extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: ''
    };

    fbManager.init(config, store);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}