import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';

import MovieList from './view/MovieList';

class MovieShow extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MovieList,
          title: '豆瓣电影Top250'
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('MovieShow', () => MovieShow);
