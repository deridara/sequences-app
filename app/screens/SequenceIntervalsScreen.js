import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FloatingButton from '../components/FloatingButton';
import IntervalTile from '../components/IntervalTile'
import { SEQUENCES } from '../data';

// import colors from '../constants/colors'

const renderIntervalTile = ({item: {title, duration, stopAfterFinish}}) => {
  return <IntervalTile title={title} duration={duration} stopAfterFinish={stopAfterFinish} />;
}

const SequenceIntervalsScreen = ({ navigation }) => {
  const seqId = navigation.getParam('seqId');
  const intervals = SEQUENCES.find((seq) => seq.id === seqId).intervals;
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.listStyle}
        data={intervals}
        keyExtractor={(interval) => interval.id}
        renderItem={renderIntervalTile}
        ListFooterComponent={<View style={{ margin: 30 }} />}
      />
      <FloatingButton
        title='play sequence'
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
    paddingHorizontal: 20,
    paddingTop: 20
  }
});

export default SequenceIntervalsScreen;
