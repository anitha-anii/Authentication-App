import React, { useEffect, useState } from 'react';


function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      const { id } = storedUser;
      fetch(`https://dummyjson.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error('An error occurred:', error));
    }
  }, []);

  return (
    <div className="profile"> 
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default Profile;

