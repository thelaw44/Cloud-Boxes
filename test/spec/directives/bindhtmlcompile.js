'use strict';

describe('Directive: bindhtmlcompile', function () {

  // load the directive's module
  beforeEach(module('CloudBoxes'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bindhtmlcompile></bindhtmlcompile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bindhtmlcompile directive');
  }));
});
