
// const roomName = JSON.parse(document.getElementById('room-name').textContent);

const roomName = "chad"

const websocketServerLocation = 'ws://'
+ window.location.host
+ '/ws/chat/'
+ roomName
+ '/'

let chatSocket = new WebSocket(websocketServerLocation);

chatSocket.onopen = function(e) {
    console.log("connected!")
    if (window.timerID) { 
        window.clearInterval(window.timerID);
        window.timerID = 0;
    }
}

const button = document.querySelector('#chat-message-submit')
if (button != null) {
    button.onclick = function(e) {
        chatSocket.send(JSON.stringify({
            'message': "hello other side"
        }));
        console.log('sent')
    }
}

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    console.log(data)
};

// chatSocket.onclose = function(e) {
//     console.error('Chat socket closed unexpectedly');
//     if (!window.timerID) {
//         window.timerID=setInterval(function() {chatSocket = new WebSocket(websocketServerLocation)}, 5000)
//         console.log("trying to reconnect")
//     }
//     // not good solutions

// };