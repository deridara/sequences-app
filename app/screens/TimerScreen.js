import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SEQUENCES } from '../data';
import FloatingButton from '../components/FloatingButton';
import colors from '../constants/colors';

// import colors from '../constants/colors'

const TimerScreen = ({ navigation }) => {
  const seqId = navigation.getParam('seqId');
  const selectedSequence = SEQUENCES.find((seq) => seq.id === seqId);
  const { duration, intervals } = selectedSequence;

  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerIsOn, setTimerIsOn] = useState(false);

  const renderIntervalTimelinePerformance = (interval, index, allDuration) => {
    const { duration: intervalDuration } = interval;
    const percentage = (intervalDuration / allDuration) * 100;
    const backgroundColor =
      colors.timelineColors[index % colors.timelineColors.length];
    return (
      <View
        key={index}
        style={{
          ...styles.intervalTimelinePerformance,
          width: `${percentage}%`,
          backgroundColor
        }}></View>
    );
  };

  let timer;
  const startTimer = () => {
    tick();
    this.timer = setTimeout(() => startTimer(), 1000);
  };
  const tick = () => {
    setTimerSeconds((seconds) => seconds + 1);
  };

  const onPlayButtonHandler = () => {
    if (timerIsOn) {
      this.timer !== undefined ? this.clearTimeout(this.timer) : null;
      setTimerIsOn(false);
    } else {
      startTimer();
      setTimerIsOn(true);
    }
  };

  const resetTimerHandler = () => {
    this.timer !== undefined ? this.clearTimeout(this.timer) : null;
    setTimerIsOn(false);
    setTimerSeconds(0);
  };

  if (timerSeconds >= duration) {
    setTimerSeconds(0);
  }

  console.log(timerSeconds, timerIsOn, this.timer);

  return (
    <View style={styles.screen}>
      <View style={styles.timerContainer}>
        <Text>{timerSeconds}</Text>
        <View style={styles.timelineContainer}>
          {intervals.map((interval, index) =>
            renderIntervalTimelinePerformance(interval, index, duration)
          )}
        </View>
        <View style={styles.time}>
          <View
            style={{
              ...styles.spentTime,
              width: `${(timerSeconds * 100) / duration}%`
            }}></View>
          <View style={{ ...styles.leftTime }}></View>
        </View>
        <Button
          title={timerIsOn ? 'pause' : 'play'}
          onPress={onPlayButtonHandler}
        />
        <Button title='reset timer' onPress={resetTimerHandler} />
      </View>
      <FloatingButton
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
  );
};

TimerScreen.navigationOptions = ({ navigation }) => {
  const seqId = navigation.getParam('seqId');
  const selectedSequence = SEQUENCES.find((seq) => seq.id === seqId);
  return { headerTitle: selectedSequence.title };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timelineContainer: {
    flexDirection: 'row',
    height: 30,
    marginHorizontal: 20,
    width: '100%'
  },
  time: {
    flexDirection: 'row',
    height: 30,
    marginHorizontal: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black'
  },
  spentTime: {
    backgroundColor: colors.primary,
    width: '0%'
  }
});

export default TimerScreen;
