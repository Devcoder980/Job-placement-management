import { useState, useEffect } from 'react';

function UserDashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // get the token from local storage
    try {
        if (token) {
            // Make API call to get the user's information
            fetch('http://localhost:5000/api/user', {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            })
              .then(response => response.json())
              .then(data => setUser(data))
              .catch(error => console.error(error));
          }
    } catch (error) {
        console.log(error)
    }
    console.log(user)
  }, []);

  if (!user) {
    return (<p>user not her</p>); // don't show anything if the user is not logged in or the data is not loaded yet
  }

  return (
    <div>
      <p>Welcome, {user.firstname}</p> {/* show the user's name */}
     
    </div>
  );
}

export default UserDashboard