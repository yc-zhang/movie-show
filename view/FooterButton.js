import React, { Component, PropTypes } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class FooterButton extends Component {
  render() {
    const {
     title,
     active
    } = this.props;

    let color = active ? 'dodgerblue' : 'white';

    return(
      <View style={styles.wrapper}>
        <Button title={title} color={color}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  }
});
