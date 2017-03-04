import React, { Component, PropTypes } from 'react';
import { ListView, Text } from 'react-native';
import MovieIntroduction from './MovieIntroduction';

export default class MovieList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          index: 1,
          name: '肖申克的救赎',
          englishName: 'The Shawshank Redemption',
          rate: 9.6,
          image: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p480747492.jpg',
        },
        {
          index: 2,
          name: '这个杀手不太冷',
          englishName: 'Léon',
          rate: 9.4,
          image: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p511118051.jpg',
        },
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
      ]),
    };
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={movie => <MovieIntroduction movie={movie}/>}
      />
    );
  }
}
