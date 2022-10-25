import { runArraySpreadTestArray } from './runArraySpreadTestArray.js';
import joinUniqueElementsFromArrsExcludingNull from '../joinUniqueElementsFromArrsExcludingNull.js';

const tests = [
  { value: [], result: [] },
  { value: [[1]], result: [1] },
  { value: [[1,1]], result: [1] },
  { value: [['a']], result: ['a'] },
  { value: [[1],[2]], result: [1,2] },
  { value: [['a','a']], result: ['a'] },
  { value: [[null],[null]], result: [] },
  { value: [[0,null],[null]], result: [] },
  { value: [[1,2],[1,3]], result: [1,2,3] },
  { value: [[1],[2],[3]], result: [1,2,3] },
  { value: [['a'],['b']], result: ['a','b'] },
  { value: [[1,2],[3,4]], result: [1,2,3,4] },
  { value: [[1,2,3,4],[4,5,5]], result: [1,2,3,4,5] },
  { value: [['a'],['b'],['c']], result: ['a','b','c'] },
  { value: [['a','b'],['a','c']], result: ['a','b','c'] },
  { value: [[true, false, false]], result: [true] },
  { value: [['a','b'],['c','d']], result: ['a','b','c','d'] },
  { value: [[1,[0,1,2],[0,1,2]]], result: [1,[0,1,2],[0,1,2]] },
  { value: [[1,1,[0,1,2],[0,1,2]]], result: [1,[0,1,2],[0,1,2]] },
  { value: [[1,2,3,4],[1,2,3,4,5,6]], result: [1,2,3,4,5,6] },
  { value: [[1,{a:'b'},{a:'b'}]], result: [1,{a:'b'},{a:'b'}] },
  { value: [[false, false], [true, true]], result: [true] },
  { value: [[1,1,{a:'b'},{a:'b'}]], result: [1,{a:'b'},{a:'b'}] },
  { value: [[1,2,3],[4,4,5,5,5,6,7,7]], result: [1,2,3,4,5,6,7] },
  { value: [[1,2,3],[4,4,5],[5,5,6,7,7,8]], result: [1,2,3,4,5,6,7,8] },
  { value: [['a','b','c','d'],['d','e','e']], result: ['a','b','c','d','e'] },
  { value: [['a','b','c','d'],['a','b','c','d','e','f']], result: ['a','b','c','d','e','f'] },
  { value: [['a','b','c'],['d','d','e','e','e','f','g','g']], result: ['a','b','c','d','e','f','g'] },
  { value: [['a','b','c'],['d','d','e'],['e','e','f','g','h']], result: ['a','b','c','d','e','f','g','h'] }
];

[
  {
    title: 'Join Unique Elements From Arrays Excluding Null (joinUniqueElementsFromArrsExcludingNull)',
    fn: joinUniqueElementsFromArrsExcludingNull,
    testArr: tests
  }
].forEach(e=>runArraySpreadTestArray(e.title, e.fn, e.testArr));
