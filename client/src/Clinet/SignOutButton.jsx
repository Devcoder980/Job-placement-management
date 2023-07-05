import { useNavigate } from 'react-router-dom';

function SignOutButton() {
    const navigate = useNavigate();

    function handleSignOut() {
        // Clear local storage
        localStorage.clear();

        // Redirect to the home page
        navigate('/');
    }

    return (
        <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16">
            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2" onClick={handleSignOut}>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                    <span className="text-sm ml-2">Sign out</span>
                </div>
            </li>
        </ul>
    );
}

// Usage:
// <SignOutButton />

export default SignOutButton;
