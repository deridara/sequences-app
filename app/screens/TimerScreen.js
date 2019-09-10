import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SEQUENCES } from '../data';
import colors from '../constants/colors';

// import colors from '../constants/colors'

const TimerScreen = ({ navigation }) => {
  const seqId = navigation.getParam('seqId');
  const selectedSequence = SEQUENCES.find((seq) => seq.id === seqId);
  return (
    <View style={styles.screen}>
      <View style={styles.timerContainer}>
        <Text>Timer Screen</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.navButton}
          title='edit'
          onPress={() =>
            navigation.navigate({
              routeName: 'SequenceIntervals',
              params: {
                seqId: seqId
              }
            })
          }
        />
        <Button
          style={styles.navButton}
          title='back'
          onPress={() =>
            navigation.navigate({
              routeName: 'MySequences',
              params: {
                seqId: seqId
              }
            })
          }
        />
      </View>
    </View>
  );
};

TimerScreen.navigationOptions = ({ navigation }) => {
  const seqId = navigation.getParam('seqId');
  const selectedSequence = SEQUENCES.find((seq) => seq.id === seqId);
  return { headerTitle: selectedSequence.title };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  navButton: {
    // backgroundColor: colors.primary
  }
});

export default TimerScreen;
