// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Appearing of "return" without a function body leads to syntax error
 *
 * @path ch12/12.9/S12.9_A1_T7.js
 * @description Checking if execution of "return x" with no function, placed inside Block, fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
{
    var x=1;
    return x;
    var y=2;
}
//
//////////////////////////////////////////////////////////////////////////////

