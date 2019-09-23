import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Title from '../../components/Title/Title';

import styles from './styles.js';
import general from '../../styles/general.js';

export default class HomeScreen extends Component {
  render() {
    return <View style={general.container}>
      <Title>Tela Inicial</Title>

      <View>
        
      </View>
    </View>;
  }
}
