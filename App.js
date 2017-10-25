import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import ScreenOne from './src/screen-one';
import ScreenText from './src/screen-text';
import ScreenScroll from './src/screen-scroll';

Navigation.registerComponent('example.one', () => ScreenOne);
Navigation.registerComponent('example.text', () => ScreenText);
Navigation.registerComponent('example.scroll', () => ScreenScroll);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.one', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});