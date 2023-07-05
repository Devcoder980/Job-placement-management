import { useNavigate } from 'react-router-dom';

function SignOutButton() {
    const navigate = useNavigate();

    function HandleJobRoute() {
        navigate('/jobs');
    }

    return (
        <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onClick={HandleJobRoute}>
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                <circle cx={12} cy={12} r={9} />
            </svg>
            <span className="ml-2">Jobs</span>
        </div>
    </li>
    );
}

// Usage:
// <SignOutButton />

export default SignOutButton;
