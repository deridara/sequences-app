import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SequenceTile from '../components/SequenceTile';
import { SEQUENCES } from '../data';
import { StackActions, NavigationActions } from 'react-navigation';
// import colors from '../constants/colors'

const MySequencesScreen = ({ navigation }) => {
  const renderSequenceTile = (itemData) => {
      
    const { title, duration, id } = itemData.item;
    
    return (
      <SequenceTile
        title={title}
        duration={duration}
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
        data={SEQUENCES}
        keyExtractor={(seq) => seq.id}
        renderItem={renderSequenceTile}
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
    padding: 20
  }
});

export default MySequencesScreen;
