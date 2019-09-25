import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Title from '../../components/Title/Title';
import Section from '../../components/Section/Section';
import Circle from '../../components/Circle/Circle';

import styles from './styles.js';
import general from '../../styles/general.js';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={general.container}>
        
        <Title>Caravane</Title>
        <Text>Encontre a caravana perfeita para você!</Text>

        <Section title="Categorias" description="Lorem Ipsum">
          <Text>a</Text>
        </Section>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Circle>
            <Text>praia</Text>
          </Circle>
        </ScrollView>
      </View>
    );
  }
}
