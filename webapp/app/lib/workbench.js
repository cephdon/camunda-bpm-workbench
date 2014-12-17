require("camunda-simple-grid");

var jquery = require('jquery');
var angular = require('angular');

/** ACE Code Editor */
var ace = require('../bower_components/ace-builds/src-min/ace');
var aceTheme = require('../bower_components/ace-builds/src-min/theme-xcode');
var uiAce = require('../bower_components/angular-ui-ace/ui-ace');

var ngModule = angular.module('developer', [
  require('./app').name,
  require('./diagram').name,
  require('./debugger').name,
  require('./console').name,
  require('./scripteditor').name,
  'ui.ace'
]);

/*ngModule.config([ '$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);*/

module.exports = ngModule;