import React, { Component } from 'react';
import { AppRegistry, View, NavigatorIOS, Text } from 'react-native';

import MovieList from './view/MovieList';
import MovieFlat from './view/MovieFlat';
import Footer from './view/Footer';

class MovieShow extends Component {
  constructor(props) {
    super(props);
    this.state = {showList: true};
  }

  _props = () => {
    return {
      component: this.state.showList ? MovieList : MovieFlat,
      title: '豆瓣电影Top250',
      barTintColor: 'black',
      titleTextColor: 'white',
      leftButtonSystemIcon: 'refresh',
      rightButtonSystemIcon: 'bookmarks',
      onRightButtonPress: () => this._changeView()
    }
  };

  _changeView = () => {
    this.state.showList = !this.state.showList;
    // this.refs.nav.replace(this._props());
    if (this.state.showList) {
      this.refs.nav.pop(this._props());
    } else {
      this.refs.nav.push(this._props());
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigatorIOS
          ref='nav'
          initialRoute={this._props()}
          style={{flex: 1}}
        />
        <Footer />
      </View>
    );
  }
}

AppRegistry.registerComponent('MovieShow', () => MovieShow);
