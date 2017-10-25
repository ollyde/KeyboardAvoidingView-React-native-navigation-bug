import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default class ScreenScroll extends React.Component {
    render() {
      return (
        <ScrollView />
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });