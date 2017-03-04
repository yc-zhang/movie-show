import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Stars extends Component {
  render() {
    const rate = this.props.rate || 0;

    const fullStarCount = parseInt(rate / 2);
    const hasHalfStar = fullStarCount < rate / 2;

    let images = [];
    for (let i = 0; i < fullStarCount; i++) {
      images.push(<Image key={i} style={styles.image} source={require('../resource/image/full.png')} />);
    }

    if (hasHalfStar) images.push(<Image key={fullStarCount} style={styles.image} source={require('../resource/image/half.png')} />);

    return (
      <View style={styles.wrapper}>
        {images}
        <Text style={styles.text}>{rate}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 12,
    height: 12
  },
  text: {
    color: '#ea9b1e',
    paddingLeft: 3
  }
});
