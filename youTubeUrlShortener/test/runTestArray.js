import { expect } from "chai";
export const runTestArray = (title, fn, testArray) => {
  describe(title, () => {
    const getTestArrayMaxLength = (t) => { // { value: '', result: '' } array
      let m = 0;
      for (let i = 0; i < t.length; i++) {
        if (JSON.stringify(t[i].value).length > m) {
          m = JSON.stringify(t[i].value).length;
        }
      }
      return m;
    }
    testArray.forEach(e => {
      it(`${JSON.stringify(e.value).padStart(getTestArrayMaxLength(testArray))}  ->  ${ JSON.stringify(e.result) }`, () => {
        const result = fn(e.value);
        expect(result).to.eql(e.result);
      });
    });
  });
}
