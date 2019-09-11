import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SequenceTile from '../components/SequenceTile';
import { SEQUENCES } from '../data';

// import colors from '../constants/colors'

const MySequencesScreen = ({ navigation }) => {
  const renderSequenceTile = (itemData) => {
    const { title, duration, id, intervals } = itemData.item;

    return (
      <SequenceTile
        title={title}
        duration={duration}
        intervalsAmount={intervals.length}
        onPlay={() =>
          navigation.navigate({
            routeName: 'Timer',
            params: {
              seqId: id
            }
          })
        }
        onEdit={() =>
          navigation.navigate({
            routeName: 'SequenceIntervals',
            params: {
              seqId: id
            }
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.listStyle}
        data={SEQUENCES}
        keyExtractor={(seq) => seq.id}
        renderItem={renderSequenceTile}
        ListFooterComponent={<View style={{ margin: 15 }} />}
      />

    </View>
  );
};

MySequencesScreen.navigationOptions = {
  headerTitle: 'My Sequences'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  listStyle: {
    paddingBottom: 50
  }
});

export default MySequencesScreen;
