<%@ Page Language="C#"  %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SignalR with AngularJS demo</title>
    <script src="Scripts/jquery-1.6.4.min.js"></script>
    <script src="Scripts/jquery.signalR-2.0.0.min.js"></script>
    <script src="Scripts/angular.js"></script>
    
    <script src="js/Directive/Directive.js"></script>
    <script src="js/App.js"></script>
    <script src="js/Services.js"></script>
    <script src="js/Controller.js"></script>
    <script src='<%: ResolveClientUrl("~/signalr/hubs") %>'></script>
</head>
<body data-ng-app="myApp" data-ng-controller="myController">
   
    <p>{{message}}</p>
    <p>{{messageFromSignalRHub}}</p>
    
    <data-my-directive data="messageFromController"></data-my-directive>

</body>
</html>
