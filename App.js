import React from 'react';
import { useScreens } from 'react-native-screens';
import { StyleSheet, Text, View } from 'react-native';

useScreens();

import Navigator from './app/navigation/Navigator';

export default function App() {
  return <Navigator />;
}
