const isGreaterThan = require('./');

require('mocha');
const assert = require('assert');

describe('isGreaterThan', function() {
    it('Should return true if x is greater than y:', function() {
        assert(!isGreaterThan(1,2));
        assert(isGreaterThan(6,4));
        assert(!isGreaterThan(7,21));
        assert(!isGreaterThan(893475,93643465));
        assert(isGreaterThan(784684567,784634));
    });

    it('Should work with strings as well:', function() {
        assert(!isGreaterThan('1','2'));
        assert(isGreaterThan('666', '69'));
        assert(!isGreaterThan('420','727'));
        assert(!isGreaterThan('999', '1000'));
        assert(isGreaterThan('2.7e5', '3.9e3'));
    });

    it('Should thorw an error whenever an invalid value is passed:', function() {
        assert.throws(() => isGreaterThan('foo', 9));
        assert.throws(() => isGreaterThan('10', 'bar'));
        assert.throws(() => isGreaterThan('fruit', 'basket'));
        assert.throws(() => isGreaterThan(78346578236785623789562378568237));
        assert.throws(() => isGreaterThan('58682365736578236572365783658326823'));
        
    });
});