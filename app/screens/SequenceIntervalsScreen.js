import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SEQUENCES } from '../data';

// import colors from '../constants/colors'

const SequenceIntervalsScreen = ({ navigation }) => {
  const seqId = navigation.getParam('seqId');
  const selectedSequence = SEQUENCES.find((seq) => seq.id === seqId);
  return (
    <View style={styles.screen}>
      <Button
        title='to my sequences'
        onPress={() =>
          navigation.navigate({
            routeName: 'MySequences',
            params: {
              seqId: seqId
            }
          })
        }
      />
      <Button
        title='play'
        onPress={() =>
          navigation.replace({
            routeName: 'Timer',
            params: {
              seqId: seqId
            }
          })
        }
      />
    </View>
  );
};

SequenceIntervalsScreen.navigationOptions = ({ navigation }) => {
  const seqId = navigation.getParam('seqId');
  const selectedSequence = SEQUENCES.find((seq) => seq.id === seqId);
  return { headerTitle: selectedSequence.title };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SequenceIntervalsScreen;
