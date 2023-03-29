import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
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
                    .then(data => {
                        setUser(data)
                        localStorage.setItem('username', data.firstname)
                    }
                    )
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
            <>
                {/* <Navbar userdata={user.firstname}/> */}

                <div className="flex text-slate-900  flex-col pt-20 h-[100vh] items-center  bg-white">
                    <div className="rounded-full w-24 flex justify-center items-center h-24  bg-slate-900" >
                        <HiUser className="w-20 h-20 text-white" />
                    </div>
                    <h2 className="font-medium text-3xl mt-4 capitalize">{user.firstname} {user.lastname}</h2>
                    <h2 className="font-medium text-md ">{user.email}</h2>
                    <h2 className="font-medium text-md mt-2 ">{user.phone}</h2>
                    <p className="text-center  w-80">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                </div>
            </>

        </div>
    );
}

export default UserDashboard