/*
Find the Longer Half
Let's find the longer half of the string before and after the x!

First, you'll need to find the lower-case x.

Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.

Take the longer string and return it!
*/

function splitAtX(string) {
  let index = string.indexOf('x');
  //console.log(index);
  let firstHalf = string.slice(0, index);
 //console.log(firstHalf);
  let secondHalf = string.slice(index + 1);
  //console.log(secondHalf);
  let firstHalfLength = firstHalf.length;
  let secondHalfLength = secondHalf.length;

  if (firstHalfLength > secondHalfLength) {
    return firstHalf;
  } else {
    return secondHalf;
  }
}
module.exports = splitAtX;

/*
test.js

const splitAtX = require('../splitAtX');
const { assert } = require('chai');

describe('splitAtX', () => {
    it('should handle the first half being longer', () => {
        assert.equal(splitAtX("Happyxdays"), "Happy");
        assert.equal(splitAtX("before the x is long"), "before the ");
    });

    it('should handle the second half being longer', () => {
        assert.equal(splitAtX("10xDeveloper"), "Developer");
        assert.equal(splitAtX("before the x is shorter than after"), " is shorter than after");
    });
});

*/
