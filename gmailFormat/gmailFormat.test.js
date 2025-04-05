import gmailFormat from './gmailFormat.js';
import Test from './test.js';

var tests = [
    {
        input: 'TEST.FORMAT@GOOGLEMAIL.COM',
        expectedOutput: 'testformat@googlemail.com'
    },
    {
        input: 'test.format@googlemail.com',
        expectedOutput: 'testformat@googlemail.com'
    },
    {
        input: 'test.format@gmail.com',
        expectedOutput: 'testformat@gmail.com'
    },
    {
        input: 'test.format@gemail.com',
        expectedOutput: 'test.format@gemail.com'
    },
    {
        input: 'test.format@other.com',
        expectedOutput: 'test.format@other.com'
    }
];
  
new Test("Gmail Format", gmailFormat, tests).runTests()
