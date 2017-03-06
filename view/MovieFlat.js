import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Image } from 'react-native';
import MovieIntroduction from './MovieIntroduction';

export default class MovieFlat extends Component {
  constructor() {
    super();
    this.movies = [
      {
        index: 3,
        name: '霸王别姬',
        englishName: '霸王别姬',
        rate: 9.5,
        image: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1910813120.jpg',
      },
      {
        index: 4,
        name: '阿甘正传',
        englishName: 'Forrest Gump',
        rate: 9.4,
        image: 'https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p510876377.jpg',
      },
      {
        index: 5,
        name: '美丽人生',
        englishName: 'La vita è bella',
        rate: 9.5,
        image: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p510861873.jpg',
      }
    ];
  }

  _eachMovie(movie) {
    return (
      <View key={movie.index} style={{flex: 0.33, alignItems: 'center', paddingTop: 10}}>
        <Image style={{height: 100, width: 65}}
        source={{uri:movie.image}} />
      </View>
    );
  }

  render() {
    return(
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.movies.map(this._eachMovie)}
        </View>
      </ScrollView>
    );
  }
}
