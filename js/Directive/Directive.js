var directives = angular.module('directives', []);

directives.directive('myDirective', function () {
    return {
        templateUrl: 'js/Directive/directive-template.html',
        replace: true,
        transclude: false,
        restrict: 'E', //E: use as an element <my-directive />, A: use as attribute <div my-directive />, C: use as a class <div class='my-directive' />
        scope: { //by putting this on means the parent scope isn't passed through
            data: '='
        },
        controller: function ($scope,demoService) {

            $scope.message = 'Loading message from hub...';

            var controllerStartup = function () {
                demoService.getMessage()
                    .done(function (response) {
                        
                        $scope.message = response;
                        $scope.$apply();
                    }).fail(function (error) {
                        alert(error);
                    });
            };
            demoService.onConnected(controllerStartup);
        }
    };
});