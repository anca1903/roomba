var assert = require("assert");
var process = require('../index.js');

describe('final position', function(){

    it('should be 1 and 3', function() {
        var someValue = process();
        console.log(someValue);
        assert.equal('1 3', someValue);
    });
});