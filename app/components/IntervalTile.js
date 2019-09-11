import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../constants/colors';

const IntervalTile = ({ title, duration }) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return (
    <View style={styles.tile}>
      <View style={styles.tileInfoContainer}>
        <TouchableWithoutFeedback style={styles.touchPlay}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.durationText}>
              {minutes < 10 ? '0' : ''}
              {minutes}:{seconds < 10 ? '0' : ''}
              {seconds}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.tileEditContainer}>
        <TouchableWithoutFeedback onPress={() => console.log('edit')}>
          <MaterialIcons name='edit' size={24}/>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    // height: 100,
    marginBottom: 15,
    borderRadius: 5,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: colors.pale
  },
  tileInfoContainer: {
    flex: 1
  },
  titleText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18
  },
  durationText: {
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  tileEditContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchEdit: { flex: 1 }
});

export default IntervalTile;
