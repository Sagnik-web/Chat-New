import { useState } from 'react';
import './App.css'
import io from 'socket.io-client'

function App() {
const [msg,setMsg] = useState('')
const [ans,setAns] = useState('')

  // client.js
const socket = io('http://localhost:4000'); // Connect to the server

// Send a message to the server
socket.emit('message', msg);

// Listen for responses from the server
socket.on('response', (data) => {
  console.log("User: ", data);  // Will log 'Message received!'
  setAns(data)
});



  return (
    <div>
        <input onChange={e=>setMsg(e.target.value)} value={msg}/>
        {ans.toString()}
    </div>
  )
}

export default App
