import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EmployerDashboard() {
    const [user, setUser] = useState({});
    // companyName: '',
    // numEmployees: '',
    // isHiringManager: false,
    // phone: '',
    // email: '',
    useEffect(() => {
        const token = localStorage.getItem('authTokenEmployer'); // get the token from local storage
        try {
            if (token) {
                // Make API call to get the user's information
                fetch('http://localhost:5000/api/employer', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        setUser(data)
                        localStorage.setItem('companyName', user.companyName)
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
                <div className="flex text-white flex-col h-[100vh] items-center pt-4 bg-slate-900">
                    <svg className="rounded-full w-36 h-36 bg-gray-300 text-gray-300" role="img" aria-label="Placeholder">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="currentColor" />
                    </svg>
                    <h2 className="font-medium text-xl mt-4">{user.companyName}</h2>
                    <h2 className="font-medium text-xl mt-4">{user.email}</h2>
                    <h2 className="font-medium text-xl mt-4">{user.phone}</h2>
                    <h2 className="font-medium text-xl mt-4">{user.isHiringManager ? 'HiringManager' : 'No'}</h2>
                    <p className="text-center my-4">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                </div>


            </>

        </div>
    );
}

export default EmployerDashboard