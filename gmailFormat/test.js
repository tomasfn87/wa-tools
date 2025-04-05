export default class Test {
    constructor(name, fn, tests) {
        if (typeof name !== 'string' || !name.length) {
            throw new Error("Non-empty string expected in 'name'.");
        }
        if (typeof fn !== 'function') {
            throw new Error("A function is expected in 'fn'.");
        }
        if (!Array.isArray(tests)) {
            throw new Error("Array of objects with keys { input, expectedOuput } expected in 'tests'.");
        }
        for (const test of tests) {
            const err = "Each element from 'tests' must be an object with properties 'input' and 'expectedOutput'.";
            if (typeof test !== 'object' || test === null) {
                throw new Error(err)
            }
            const keys = Object.keys(test);
            let valid = keys.length === 2
                && keys.includes('input')
                && keys.includes('expectedOutput');
            if (!valid) {
                throw new Error(err);
            }
        }
        this.name = name;
        this.fn = fn;
        this.tests = tests
    }
    
    runTests() {
        process.stdout.write('Running test for ');
        console.log('\x1b[93m' + this.name + '\x1b[0m...\n');
        const tests = this.tests;
        let errors = 0;
        for (let i=0; i<tests.length; i++) {
            const test = this.fn(tests[i].input);
            process.stdout.write(
                '\x1b[93mCase\x1b[0m:            '
                + tests[i].input
                + '\n\x1b[33mExpected output\x1b[0m: '
                + tests[i].expectedOutput
                + '\n\x1b[96mActual output\x1b[0m:   '
                + test + '\n-> ');
            if (test == tests[i].expectedOutput) {
                console.log('\x1b[32mOk\x1b[0m');
            } else {
                console.log('\x1b[91mFail\x1b[0m');
                errors++
            }
            i != (tests.length - 1) && console.log()
        }
        console.log();
        if (errors === 0) {
            console.log('\x1b[32mTest passed ('
            + tests.length + ' test'
            + (tests.length===1?'':'s') + ').\x1b[0m');
            return
        }
        console.log('\x1b[91mTest failed ('
            + errors + ' error' + (errors===1?'':'s') + ' out of '
            + tests.length + ' test' + (tests.length===1?'':'s') + ').\x1b[0m')
    }
}
