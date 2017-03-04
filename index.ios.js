import React, { Component } from 'react';
import { AppRegistry, View, NavigatorIOS } from 'react-native';

import MovieList from './view/MovieList';
import Footer from './view/Footer';


class MovieShow extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigatorIOS initialRoute={{
            component: MovieList,
            title: '豆瓣电影Top250',
            barTintColor: 'black',
            titleTextColor: 'white'
          }}
          style={{flex: 1}}
        />
        <Footer />
      </View>
    );
  }
}

AppRegistry.registerComponent('MovieShow', () => MovieShow);
