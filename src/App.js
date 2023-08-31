import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


function App() {

  const [userList, setUserList] = useState([]);

  const addNewUser = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addNewUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
