var angular = require('angular');
require('angular-mocks');
var main = require('./main');

describe('main component', function () {
  beforeEach(function () {
    angular
      .module('app', ['app/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, title, techs and footer', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('drmsweb-header').length).toEqual(1);
    expect(element.find('drmsweb-title').length).toEqual(1);
    expect(element.find('drmsweb-techs').length).toEqual(1);
    expect(element.find('drmsweb-footer').length).toEqual(1);
  }));
});
