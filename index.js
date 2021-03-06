import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
<View style={{ flex: 1}}>
  <Header headerText={'Album To Do'}/>
  <AlbumList />
</View>
);

AppRegistry.registerComponent('albmus', () => App);
