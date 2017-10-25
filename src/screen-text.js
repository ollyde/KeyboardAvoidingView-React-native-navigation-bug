import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class ScreenText extends React.Component {
    render() {
      return (
          <Text>Text works fine</Text>
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