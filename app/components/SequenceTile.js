import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const SequenceTile = ({ title, duration, onEdit, onPlay }) => {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60
  return (
    <View style={styles.tile}>
      <View style={styles.tilePlayContainer}>
        <TouchableOpacity style={styles.touchPlay} onPress={onPlay}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.durationText}>
              {minutes < 10 ? '0' : ''}
              {minutes}:{seconds < 10 ? '0' : ''}
              {seconds}
            </Text>
          </View>
          <View style={styles.playIcon}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.tileEditContainer}>
        <TouchableOpacity
          style={styles.touchEdit}
          onPress={onEdit}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    // height: 100,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  tilePlayContainer: {
    backgroundColor: colors.light,
    flex: 1
  },
  touchPlay: { flex: 1, flexDirection: 'row' },
  titleText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18
  },
  durationText: {
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  playIcon: {},
  tileEditContainer: {
    backgroundColor: colors.pale,
    width: 60
  },
  touchEdit: { flex: 1 }
});

export default SequenceTile;
