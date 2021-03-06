/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-1.js
 * @description Array.prototype.indexOf - element to be retrieved is own data property on an Array-like object
 */


function testcase() {
        var obj = { 0: 0, 1: 1, 2: 2, length: 3 };
        return Array.prototype.indexOf.call(obj, 0) === 0 &&
            Array.prototype.indexOf.call(obj, 1) === 1 &&
            Array.prototype.indexOf.call(obj, 2) === 2;
    }
runTestCase(testcase);
