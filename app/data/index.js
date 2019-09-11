import Sequence from '../models/sequence';
import Interval from '../models/interval';

export const SEQUENCES = [
  new Sequence(
    's1',
    'workout 1',
    [new Interval('i1', 'exercise 1', 5, false)],
    5
  ),
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
      new Interval('i3', 'exercise 3', 3, false),
      new Interval('i4', 'exercise 2', 120, true),
      new Interval('i5', 'exercise 3', 3, false),
      new Interval('i6', 'exercise 2', 120, true),
      new Interval('i7', 'exercise 3', 3, false),
      new Interval('i8', 'exercise 2', 120, true),
      new Interval('i9', 'exercise 3', 3, false),
      new Interval('i10', 'exercise 2', 120, true),
      new Interval('i11', 'exercise 3', 3, false),
      new Interval('i12', 'exercise 2', 120, true)
    ],
    756
  ),
  new Sequence(
    's4',
    'workout 4',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's5',
    'workout 5',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's6',
    'workout 6',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's7',
    'workout 7',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's8',
    'workout 8',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's9',
    'workout 9',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's10',
    'workout 10',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's11',
    'workout 11',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's12',
    'workout 12',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  ),
  new Sequence(
    's13',
    'workout 13',
    [
      new Interval('i1', 'exercise 1', 15, false),
      new Interval('i2', 'exercise 2', 120, true),
      new Interval('i3', 'exercise 3', 3, false)
    ],
    138
  )
];
