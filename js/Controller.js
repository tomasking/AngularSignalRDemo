
myApp.controller('myController', function MyController($scope, demoService) {
    
    $scope.message = "SignalR with AngularJS demo";
    $scope.messageFromSignalRHub = "Loading message from hub...";
    $scope.messageFromController = 'this is from the controller';
    var controllerStartup = function() {
        demoService.getMessage()
            .done(function (response) {
                $scope.messageFromSignalRHub = response;
                $scope.$apply();
            }).fail(function(error) {
                alert(error);
            });
    };
    demoService.onConnected(controllerStartup);
});