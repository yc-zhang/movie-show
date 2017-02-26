import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class MovieIntroduction extends Component {
  render() {
    let movie = this.props.movie;
    return(
      <View>
        <Text style={styles.movieIndex}>{movie.index}</Text>
        <View style={styles.movieDetail}>
          <Image style={{width: 50, height: 50}} source={{uri: 'http://news.xinhuanet.com/world/2015-05/09/127782089_14311512601821n.jpg'}}/>
          <Text>{movie.name}</Text>
          <Text>{movie.englishName}</Text>
          <Text>{movie.stars}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieIndex: {
    color: '#797979',
    fontSize: 20,
    backgroundColor: '#F1F1F1',
    paddingLeft: 10,
    borderBottomColor: '#ff0000'
  },
  movieDetail: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  }
});
