
const socket = new WebSocket('ws://localhost:8000/ws/realtime/')

socket.onmessage = function(e){
    var djangoData = JSON.parse(e.data);
    console.log(djangoData);
}

