const express = require('express')
const http = require('http')
const socket = require('socket.io')
const cors = require('cors')
const app = express()

const server = http.createServer(app)

const io = socket(server,{
    cors: {
      origin: 'http://localhost:5173', // Allow this origin
      methods: ['GET', 'POST'],        // Allow these HTTP methods
      allowedHeaders: ['Content-Type'], // Specify allowed headers
      credentials: true,               // Allow credentials (cookies, etc.)
    },
    pingTimeout: 60000, // Time before considering a connection as lost
    pingInterval: 25000, // Time interval for sending pings to the client
  })



//   .of('/chat')

io.on('connection',socket=>{
    // console.log('A user connected');
  
  // Listen for a custom event from the client
  socket.on('message', (data) => {
    console.log('Message from client:', data);
    socket.emit('response', data); // Respond back to the client
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
})

server.listen(4000,()=>{
    console.log(`Server is running on ...`);
    
})

