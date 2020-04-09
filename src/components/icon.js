import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');

class Icon extends Component {
  render() {
    if (!this.props.choice) {
      return false;
    }
    
    if (this.props.choice === 'pedra') {
      return (
        <View style={style.icon}>
          <Text style={style.playerText}>{this.props.player}</Text>
          <Image source={pedra} />
        </View>
      );
    }
    if (this.props.choice === 'papel') {
      return (
        <View style={style.icon}>
          <Text style={style.playerText}>{this.props.player}</Text>
          <Image source={papel} />
        </View>
      );
    }
    if (this.props.choice === 'tesoura') {
      return (
        <View style={style.icon}>
          <Text style={style.playerText}>{this.props.player}</Text>
          <Image source={tesoura} />
        </View>
      );
    }
  }
}

const style = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginBottom: 20
  },
  playerText: {
    fontSize: 18
  }
});

export default Icon;
