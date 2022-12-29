 /*
Sum it Up!
The function maxSum takes a number argument num.

Your goal is find the sum all of numbers, starting from 1, up to and including num.

For example, if num is 5, your sum would be 1 + 2 + 3 + 4 + 5 or 15.
*/

function maxSum(num) {
    total = 0;
    for (i = 1; i <= num; i++) {
        total += i;
    }
    return total;
    
}

module.exports = maxSum;

/*

test.js

const { assert } = require('chai');
const maxSum = require('../maxSum');

describe('maxSum', () => {
    it('should return zero', () => {
        assert.equal(maxSum(0), 0);
    });

    it('should return the max sum of 1', () => {
        assert.equal(maxSum(1), 1);
    });

    it('should return the max sum of positive integer', () => {
        assert.equal(maxSum(5), 15);
    });

    it('should return zero for a negative integer', () => {
        assert.equal(maxSum(-5), 0)
    })
})
*/
