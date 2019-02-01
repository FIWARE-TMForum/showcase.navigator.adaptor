'use strict';

/**
 *   Provisions context data concerning city providers configuration
 *  
 *
 */

var Orion = require('fiware-orion-client');
var ORION_SERVER = 'https://context.opplafy.eu/v1';

var server = ORION_SERVER;
if (process.argv.length > 2) {
  server = process.argv[2] + '/v1';
}

var OrionClient = new Orion.Client({
  url: server,
  userAgent: 'fiware-here-adapter',
  service: 'opplafy'
});

var cityData = require('./city-config.js').cityData;

OrionClient.updateContext(cityData).then(function() {
  console.log('Context data updated properly');
}, function(err) {
    console.error('Error while updating context data: ', err);
});
