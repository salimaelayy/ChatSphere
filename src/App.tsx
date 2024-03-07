// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000');

function App() {
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessages((messages) => [...messages, message]);
  //   });
  // }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (name && message) {
  //     socket.emit('sendMessage', { name, message });
  //     setName('');
  //     setMessage('');
  //   }
  // };

  return (
    <div>
      <form >
        <input type="text" placeholder="Your name" />
        <input type="text"  placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
      <ul>
        <li>hi <span className="">salima</span></li>
        <li>hello <span className="">salima</span></li>
        <li>hi <span className="">salima</span></li>
      </ul>
    </div>
  );
}

export default App;