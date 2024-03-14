// server.js
const express = require('express');
const Message = require('./models/messages')
const http = require('http');
const { Server } = require('socket.io');

require('./connection')

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors:{
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.use(express.json())
// app.use('/messages',MessageRouter)

io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  socket.on('joinRoom', (data) => {
    socket.join(data.room);
    console.log(`user ${data.username} joined the room:${data.room}`);
  });
  socket.on('sendMessage', (data) => {

    console.log('Received message:', data.message);

    const message= new Message(data);
    message.save();

     io.to(data.room).emit('receivedMessage', {
      username: data.username,
      message: data.message,
      room: data.room,
      time:data.time

    });
    
  });
  
 
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    socket.on('leaveRoom', () => {
      socket.rooms.forEach((room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left the room: ${room}`);
      });
    });
  });
});

const PORT = parseInt(process.env.PORT || '3008');

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
