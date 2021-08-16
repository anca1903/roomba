var assert = require("assert");
var {process} = require('../index.js');

/*run once, save results*/
var result = process();

describe('final position', function(){
    it('should be 1 and 3', function() {
        assert.deepStrictEqual([result[0] , result[1]], [1, 3]);
    });
});


describe('tiles', function(){
    it('should be 1', function() {
        assert.strictEqual(result[2], 1);
    });
});