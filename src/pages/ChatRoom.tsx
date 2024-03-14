import React, { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';

interface Message {
  username: string;
  message: string;
  room: string;
  time:string;
}

interface Props {
  socket: Socket;
  username: string;
  room: string;

}

const ChatRoom: React.FC<Props> = ({ socket, username, room }) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage: Message = {
        username: username,
        message: message,
        room: room,
        time: new Date().toLocaleTimeString(),
      };

      socket.emit('sendMessage', newMessage);
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  const leaveRoom = () => {
    socket.emit('leaveRoom');
  };
  

  useEffect(() => {
    socket.on('receivedMessage', (msg: Message) => {
      if (msg.username !== username) {
        setMessages(prevMessages => [...prevMessages, msg]);
      }
    });

    return () => {
      leaveRoom();
      socket.off('receivedMessage');
    };
  }, [socket, username,leaveRoom]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-700">
    <div className="w-full max-w-lg rounded-lg shadow-lg bg-white">
      <header className="bg-blue-500 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
        <h1 className="text-xl font-bold"><i className="fas fa-smile mr-2"></i> ChatSphere</h1>
        <button className='btn' onClick={leaveRoom}>Leave Room</button>
      </header>
      <main className="flex">
        <div className="w-1/ p-4 text- bg-blue-600 text-white rounded-bl-lg">
          <h3 className="text-lg font-semibold inline"><i className="fas fa-comments mr-2"></i> Room Name : <span className='font-mono text-xs'> {room}</span></h3>
          <h3 className="text-lg font-semibold"><i className="fas fa-users mr-2"></i> Users</h3>
          <ul id="users" className='font-mono'>
            <li>{username}</li>
          </ul>
        </div>
        <div className="w-2/3 p-4 bg-white">
          <div className="h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 ${message.username === username ? 'items-end' : 'items-start'}`}>
                <div>
                  
                  <div className={`px-4 py-2 font-medium  rounded-lg inline-block text-sm ${message.username === username ? 'bg-pink-600 text-white justify-self-end' : 'bg-blue-600 text-white justify-self-start'}`}>
                    
                  <div> <span className="text-gray-100 text-xs justify-self-start">{message.time}</span> </div>
                    {message.message}
                    <div className="flex justify-between items-center">
                    <span className="text-gray-100 text-xs font-mono justify-self-end">{message.username}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          <form className="mt-4 flex" onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Enter Message"
              required
              autoComplete="off"
              className="flex-1 px-4 py-2 mr-2 border-2 bottom-2 border-blue-500 focus:outline-none focus:ring focus:border-blue-500 rounded-l-lg"
            />
            <button type="submit" className="btn bg-blue-500 text-white w-20 rounded-r-lg">
              <i className="fas fa-paper-plane mr-2"></i> Send
            </button>
          </form>
        </div>
      </main>
    </div>
  </div>
  );
};

export default ChatRoom;
