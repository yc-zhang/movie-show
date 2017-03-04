import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Stars from './Stars'

export default class MovieIntroduction extends Component {
  render() {
    let movie = this.props.movie;
    let index = movie.index;
    if (movie.index < 10) index = '0' + movie.index;

    return(
      <View>
        <View style={styles.movieIndexWrapper}>
          <Text style={styles.movieIndex}>{index}</Text>
        </View>
        <View style={styles.movieDetail}>
          <View style={styles.movieDetailLeft}>
            <Image style={styles.movieImage} source={{uri: movie.image}}/>
          </View>
          <View style={styles.movieDetailMiddle}>
            <View style={styles.movieDetailItem}><Text style={styles.movieName}>{movie.name}</Text></View>
            <View style={styles.movieDetailItem}><Text style={styles.englishName}>{movie.englishName}</Text></View>
            <View style={styles.movieDetailItem}><Stars rate={movie.rate}/></View>
          </View>
          <View style={styles.movieDetailRight}>
            <Text style={styles.movieRightText}>></Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieIndexWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
    borderTopWidth: 1,
    borderTopColor: 'gainsboro'
  },
  movieIndex: {
    color: '#797979',
    fontSize: 20,
    backgroundColor: '#F1F1F1',
    paddingLeft: 10
  },
  movieDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  movieDetailLeft: {
    flex: 0.2
  },
  movieImage: {
    width: 65,
    height: 100
  },
  movieDetailMiddle: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10
  },
  movieDetailItem: {
    justifyContent: 'center',
    flex: 0.22
  },
  movieName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  englishName: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray'
  },
  movieDetailRight: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  movieRightText: {
    fontSize: 20,
    color: 'gainsboro',
    fontWeight: 'bold'
  }
});
