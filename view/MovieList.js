import React, { Component, PropTypes } from 'react';
import { ListView, Text } from 'react-native';
import MovieIntroduction from './MovieIntroduction';

export default class MovieList extends Component {
  // _handleBackPress() {
  //   this.props.navigator.pop();
  // }
  //
  // _handleNextPress(nextRoute) {
  //   this.props.navigator.push(nextRoute);
  // }

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          index: 1,
          name: '肖申克的救赎',
          englishName: 'The Shawshank Redemption',
          stars: 9.6,
          image: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p480747492.jpg',
        },
        {
          index: 2,
          name: '这个杀手不太冷',
          englishName: 'Leon',
          stars: 9.4,
          image: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p511118051.jpg',
        }
      ]),
    };
  }

  render() {
    // const nextRoute = {
    //   component: MovieList,
    //   title: 'Bar That',
    //   passProps: { myProp: 'bar' }
    // };
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={movie => <MovieIntroduction movie={movie}/>}
      />
      // <Text style={{marginTop: 200, alignSelf: 'center'}}>
      //   {this.props.title}
      // </Text>
    );
  }
}
