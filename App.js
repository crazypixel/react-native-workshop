import React from 'react';
import { View } from 'react-native';
import {StackNavigator} from 'react-navigation';

// VIEWS
import Welcome from './src/views/welcome';
import List from './src/views/list';
import NewItem from './src/views/newItem';

const App = StackNavigator({
  Welcome: { screen: Welcome },
  List: { screen: List },
  NewItem: { screen: NewItem }
}, { headerMode: 'none' });

export default App
