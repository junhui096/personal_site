/* dom.js */
var jsdom = require('jsdom').JSDOM;
var exposedProperties = ['window', 'navigator', 'document'];

global.document = new jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
