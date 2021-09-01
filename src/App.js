import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}
  useEffect(()=>{
    async function loadUsers(){
      const response= await fetch ("https://jsonplaceholder.typicode.com/users");

      const usersAPI= await response.json();
      setUsers(usersAPI);
    }
    loadUsers();
  }, []);
  
  
  
  

  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} setCurrentUser={setCurrentUser} />
      </div>
    </div>
  );
}

export default App;
