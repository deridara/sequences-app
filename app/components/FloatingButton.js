import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const FloatingButton = ({ style, title, ...props }) => {
  return (
      <TouchableHighlight {...props} style={styles.button}>
        <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    bottom: 20,
    left: 20,
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.dark,
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

export default FloatingButton;
