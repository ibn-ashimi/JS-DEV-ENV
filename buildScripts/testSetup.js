//This file isn't transpiled, so must use commonJS and Es5
//Register babel to transpile before our test run
require('babel-register')();
//Disable webpack feature that Mocha doesn't understand
require.extensions['.css'] = function(){};
