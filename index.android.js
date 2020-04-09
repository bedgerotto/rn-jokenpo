import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import Head from './src/components/head';
import Icon from './src/components/icon';

class Jokenpo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userChoice: '',
      computerChoice: ''
    };
  }

  jokenpo(choice) {
    const computer = Math.floor(Math.random() * 3);
    const options = ['pedra', 'papel', 'tesoura'];
    let result = 'Usuário ganhou';

    if (options[computer] === choice) {
      result = 'Empate';
    }
    if (
        (options[computer] == 'pedra' && choice == 'tesoura')  ||
        (options[computer] == 'papel' && choice == 'pedra')  ||
        (options[computer] == 'tesoura' && choice == 'papel')
    ) {
      result = 'Computador Ganhou';
    }

    this.setState({
      userChoice: choice,
      computerChoice: options[computer],
      result
    });
  }

  render() {
    return (
      <View>
        <Head />
        <View style={style.actionPanel}>
          <View style={style.choiceBtn}>
            <Button
              title="pedra"
              onPress={() => this.jokenpo('pedra')}
            />
          </View>
          <View style={style.choiceBtn}>
            <Button
              title="papel"
              onPress={() => this.jokenpo('papel')}
            />
          </View>
          <View style={style.choiceBtn}>
            <Button
              title="tesoura"
              onPress={() => this.jokenpo('tesoura')}
            />
          </View>
        </View>
        <View style={style.stage}>
          <Text style={style.resultText}>{this.state.result}</Text>

          <Icon choice={this.state.computerChoice} player="Computador" />
          <Icon choice={this.state.userChoice} player="Usuário" />
        </View>
        
      </View>
    );
  }
}

const style = StyleSheet.create({
  actionPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  choiceBtn: {
    width: 90
  },
  stage: {
    alignItems: 'center',
    marginTop: 10
  },
  resultText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('Jokenpo', () => Jokenpo);
