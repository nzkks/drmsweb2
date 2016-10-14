var angular = require('angular');
require('angular-mocks');
var header = require('./header');

describe('header component', function () {
  beforeEach(function () {
    angular
      .module('drmswebHeader', ['app/header.html'])
      .component('drmswebHeader', header);
    angular.mock.module('drmswebHeader');
  });

  it('should render \'DRMSWeb\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<drmsweb-header></drmsweb-header>')($rootScope);
    $rootScope.$digest();
    var header = element.find('a');
    expect(header.html().trim()).toEqual('DRMSWeb');
  }));
});
