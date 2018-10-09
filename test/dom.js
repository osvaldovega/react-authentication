/** dom.js */
var jsdom = require('jsdom');
var exposedProperties = ['window', 'navigator', 'document'];
import 'mock-local-storage';

const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;

global.document = document;
global.window = document.defaultView;
window.localStorage = global.localStorage;

Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
