import React, { Component, PropTypes } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import Button from 'react-native-button';

import MovieDetailClient from '../service/MovieDetailClient';
import Stars from './Stars'

export default class MovieDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this._loadMovieDetail();
  }

  _loadMovieDetail() {
    const client = new MovieDetailClient('somewhere');
    client.fetch(this.props.movie.index).then(data => this.setState(data)).catch(e => _handleError(e));
  }

  _handleError(e) {
    // TODO: do some error here
  }

  render() {
    return (
      <ScrollView style={styles.main}>
        <View>
          {this._bannerRender()}
          {this._buttonsRender()}
          {this._photoRender()}
          {this._introductionRender()}
          {this._staffsRender()}
        </View>
      </ScrollView>
    );
  }

  _bannerRender() {
    let {
      name, image, rate, ratedCount, year, duration, nation, tags
    } = this.state;
    return (
      <View style={styles.banner}>
        <View style={styles.bannerLeft}>
          <Image style={styles.bannerImage} source={{uri: image}}/>
        </View>
        <View style={styles.bannerRight}>
          <View style={styles.bannerRightTitle}>
            <Stars rate={rate}/>
            <Text style={styles.bannerRightTitleRate}>{ratedCount}人评分</Text>
          </View>
          <View style={styles.bannerRightBody}>
            <Text style={styles.bannerTitleText}>{year} / {duration} 分钟</Text>
            <Text style={styles.bannerTitleText}>{nation}</Text>
            <Text style={styles.bannerTitleText}>{tags}</Text>
          </View>
        </View>
      </View>
    );
  }

  _buttonsRender() {
    return (
      <View style={styles.middlePanel}>
        <Button
          containerStyle={styles.viewButton}
          style={styles.buttonText}
          onPress={() => {}}>
          我想看
        </Button>
        <Button
          containerStyle={styles.viewButton}
          style={styles.buttonText}
          onPress={() => {}}>
          看过了
        </Button>
      </View>
    );
  }

  _photoRender() {
    let {images, imagesCount} = this.state;
    if (images) {
      return (
        <View style={styles.middlePanel}>
          <View style={styles.photoPanel}>
            <View style={styles.photoLeft}>
              {images.slice(0, 4).map((img, index) => <Image key={index} style={styles.photo} source={{uri: img}}/>)}
            </View>
            <View style={styles.photoRight}>
              <Text style={styles.photoText}>{imagesCount}</Text>
              <Text style={styles.photoText}> > </Text>
            </View>
          </View>
        </View>
      );
    }
    return (<View/>);
  }

  _introductionRender() {
    let introduction = this.state.introduction;
    if (introduction) {
      if (introduction.length > 200) {
        introduction = introduction.substr(0, 197) + ' ...';
      }
      return (
        <View style={styles.middlePanel}>
          <View style={styles.introductionPanel}>
            <Text style={styles.introductionText}>{introduction}</Text>
          </View>
        </View>
      )
    }
    return (<View/>);
  }

  _staffsRender() {
    let { directors, casts } = this.state;
    if (directors && casts) {
      return directors.concat(casts).map((people, index) => {
        let derector = people.isDirector ? '[导演]' : '';
        return (
          <View key={index} style={styles.middlePanel}>
            <View style={styles.staffPanel}>
              <Image style={styles.staffPhoto} source={{uri: people.image}}/>
              <Text style={styles.staffText}>{people.name}{derector}</Text>
            </View>
          </View>
        );
      });
    }
    return (<View/>);
  }

  _commentsRender() {

  }

  _adRender() {

  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },
  banner: {
    flexDirection: 'row'
  },
  bannerLeft: {
    padding: 10,
    flex: 0.4,
    justifyContent: 'center'
  },
  bannerRight: {
    padding: 10,
    paddingLeft: 0,
    flex: 0.6
  },
  bannerImage: {
    width: 117,
    height: 180,
    borderWidth: 2,
    borderColor: 'gainsboro'
  },
  bannerRightTitle: {
    flexDirection: 'row',
  },
  bannerRightTitleRate: {
    marginLeft: 20,
    color: 'gray'
  },
  bannerRightBody: {
    marginTop: 40
  },
  bannerTitleText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600'
  },
  viewButton: {
    padding: 13,
    height: 45,
    width: 170,
    marginLeft: 5,
    marginRight: 5,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#EBEBEB'
  },
  buttonText: {
    fontSize: 20,
    color: 'gray'
  },
  middlePanel: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },
  photoPanel: {
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    width: 350,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  photoLeft: {
    flexDirection: 'row',
  },
  photoRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  photoText: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '800'
  },
  introductionPanel: {
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    width: 350,
    borderRadius: 4,
    padding: 5
  },
  introductionText: {
    color: 'gray',
    fontSize: 16,
  },
  photo: {
    width: 55,
    height: 55,
    margin: 5
  },
  staffPanel: {
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    width: 350,
    borderRadius: 4,
    padding: 5,
    alignItems: 'center'
  },
  staffPhoto: {
    width: 55,
    height: 55,
  },
  staffText: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 10
  }
});
