import Sequence from '../models/sequence';
import Interval from '../models/interval'

export const SEQUENCES = [
         new Sequence('s1', 'workout 1', [], 0),
         new Sequence(
           's2',
           'workout 2',
           [
             new Interval('i1', 'exercise 1', 10, false),
             new Interval('i2', 'exercise 2', 20, true),
             new Interval('i3', 'exercise 3', 30, false)
           ],
           60
         ),
         new Sequence(
           's3',
           'workout 3',
           [
             new Interval('i1', 'exercise 1', 15, false),
             new Interval('i2', 'exercise 2', 120, true),
             new Interval('i3', 'exercise 3', 3, false)
           ],
           138
         )
       ];