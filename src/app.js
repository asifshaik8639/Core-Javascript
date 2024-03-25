const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join-room', (roomID) => {
    socket.join(roomID);
    io.to(roomID).emit('user-connected', socket.id);

    socket.on('disconnect', () => {
      io.to(roomID).emit('user-disconnected', socket.id);
    });
  });
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
