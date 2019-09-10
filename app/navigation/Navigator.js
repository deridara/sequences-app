import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import MySequencesScreen from '../screens/MySequencesScreen';
import SequenceIntervalsScreen from '../screens/SequenceIntervalsScreen';
import TimerScreen from '../screens/TimerScreen';

import colors from '../constants/colors';

const Navigator = createStackNavigator(
  {
    MySequences: { screen: MySequencesScreen },
    SequenceIntervals: { screen: SequenceIntervalsScreen },
    Timer: { screen: TimerScreen }
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'My Title',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : 'white'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
    }
  }
);

export default createAppContainer(Navigator);
