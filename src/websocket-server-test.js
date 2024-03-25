const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8900 }); // Set the desired port

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
   console.log(`Received message: ${message}`); 
    // You can process the message and send a response here
    socket.send(`Server received asif shaik: ${message}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});
