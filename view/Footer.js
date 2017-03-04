import React, { Component, PropTypes } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FooterButton from './FooterButton';

export default class Footer extends Component {
  render() {
    return(
      <View style={styles.panel}>
        <FooterButton title='上映' active={false}/>
        <FooterButton title='影院' active={false}/>
        <FooterButton title='我的电影' active={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    flex: 0.08,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
