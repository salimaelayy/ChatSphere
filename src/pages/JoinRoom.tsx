import React, { useState } from "react";
import io from 'socket.io-client';
import ChatRoom from "./ChatRoom";

const socket = io('http://localhost:3008');

const JoinRoom: React.FC = () => {

  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "" || room === "") {
      alert("Please enter your name and room");
      return;
    }

    socket.emit("joinRoom", { room, username });
    console.log("Test: ", username, room);
    setShowChat(true);
  };

  return (
<>
    {!showChat ? (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Join Chat</h1>
            <form onSubmit={joinRoom} className="max-w-md mx-auto">
              <div className="mb-6">
                <label htmlFor="username" className="block text-blue-600">Username</label>
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Enter username..." 
                  required 
                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-blue-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="room" className="block text-blue-600">Room</label>
                <select 
                  name="room" 
                  id="room" 
                  value={room}
                  onChange={(event) => setRoom(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-blue-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                >
                  <option value="">Select a room</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="PHP">PHP</option>
                  <option value="C#">C#</option>
                  <option value="Ruby">Ruby</option>
                  <option value="Java">Java</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:bg-blue-700"
              >
                Join room
              </button>
            </form>         
            </div>
            
    </div>
        ) : (
          <ChatRoom socket={socket} room={room} username={username}/>
        )}
      </>
  );
}

export default JoinRoom;
