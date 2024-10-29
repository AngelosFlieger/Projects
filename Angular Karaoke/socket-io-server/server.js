const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://139.91.80.157:4200",
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log('Message from client:', data);
    // Broadcast the message to all clients (including the sender)
    io.emit('message', data);
  });
  socket.on('redirect', (path) => {
    console.log(`Redirecting to: ${path}`);
    io.emit('redirect', path);
  });
  socket.on('redirect2', (path) => {
    console.log(`Redirecting to: ${path}`);
    io.emit('redirect2', path);
  });
  socket.on('redirect3', (path) => {
    console.log(`Redirecting to: ${path}`);
    io.emit('redirect3', path);
  });
  socket.on('buttonClicked', () => {
    console.log('Button clicked event received');
    // Broadcast the event to all connected clients
    io.emit('buttonClicked');
  });


  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://192.168.2.8:${PORT}`);
});
