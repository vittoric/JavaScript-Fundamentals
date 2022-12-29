/*
Complete the Top Double
Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.

👀 This one is a bit tricky! You might double the value before realizing it is larger than top. You'll need to go back and return 
the value before that value that exceeds the top.*/

function topDouble(value, top) {
    while (value < top){
        value2= value*2

        if(value2 > top){
            
            break;
        }
        value *= 2;
    
    }
    return (value);
}

module.exports = topDouble;

/*
test.js

const { assert } = require('chai');
const topDouble = require('../topDouble');

describe('topDouble', () => {
    it('should determine the top double of 1 less than 5', () => {
        assert.equal(topDouble(1, 5), 4);
    });

    it('should determine the top double of 2 less than 100', () => {
        assert.equal(topDouble(2, 100), 64);
    });

    it('should determine the top double of 5 less than 100', () => {
        assert.equal(topDouble(5, 100), 80);
    });
});*/
