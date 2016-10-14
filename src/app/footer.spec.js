var angular = require('angular');
require('angular-mocks');
var footer = require('./footer');

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('drmswebFooter', ['app/footer.html'])
      .component('drmswebFooter', footer);
    angular.mock.module('drmswebFooter');
  });

  it('should render \'DRMSWeb\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<drmsweb-footer></drmsweb-footer>')($rootScope);
    $rootScope.$digest();
    var footer = element.find('a');
    expect(footer.html().trim()).toEqual('DRMSWeb');
  }));
});
