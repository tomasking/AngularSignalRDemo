using Microsoft.AspNet.SignalR;

namespace SignalR2Demo.SignalR
{
    public class DemoHub : Hub
    {
        public string GetMessage()
        {
            return "This message has been returned by the hub";
        }
    }
}