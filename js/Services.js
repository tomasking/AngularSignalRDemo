
myApp.factory('demoService', function DemoService() {

    var demoHub = $.connection.demoHub;
    var connected = false;
    var callBacks = [];

    $.connection.hub.start().done(function() {
        connected = true;
        for (var c = 0; c < callBacks.length; c++) {
            callBacks[c]();
        }
    }).fail(function() {
        alert("Could not Connect!");
    });

    return {
        onConnected: function(callback) {
            if (connected) {
                callback();
            } else {
                callBacks.push(callback);
            }
        },
        getMessage: function() {
            return demoHub.server.getMessage();
        }
    };
});