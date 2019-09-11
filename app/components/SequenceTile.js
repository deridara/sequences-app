import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../constants/colors';

const SequenceTile = ({ title, duration, onEdit, onPlay, intervalsAmount }) => {
  const hours = Math.floor(duration / 120);
  const minutes = Math.floor((duration - hours * 60) / 60);
  const seconds = duration % 60;
  return (
    <View style={styles.tile}>
      <View style={styles.tilePlayContainer}>
        <TouchableOpacity style={styles.touchPlay} onPress={onPlay}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.durationText}>
              {hours ? `${hours < 10 ? '0' : ''}${hours}:` : ''}
              {minutes < 10 ? '0' : ''}
              {minutes}:{seconds < 10 ? '0' : ''}
              {seconds},{' '}
              {intervalsAmount === 1 ? `1 interval` : `${intervalsAmount} intervals`}
            </Text>
          </View>
          <View style={styles.playIcon}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.tileEditContainer}>
        <TouchableOpacity style={styles.touchEdit} onPress={onEdit}>
          <MaterialIcons name='edit' size={24} />
        </TouchableOpacity>
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
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SequenceTile;
