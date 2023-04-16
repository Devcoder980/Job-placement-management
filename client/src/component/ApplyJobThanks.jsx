import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
function ThankYou() {

    return (
        <div className="bg-gray-200 max-h-screen flex flex-col  justify-center">
            <div className="congrats-container">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="bg-white px-10 py-8 rounded shadow-md max-w-lg w-full text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center message">Congratulations!</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Your job application has been successfully submitted. We appreciate your
                        interest for this  role and will review your application carefully.
                    </p>
                    <p className="text-sm text-gray-700 mb-6">
                        If your qualifications match our requirements, we will contact you soon to schedule an
                        interview. Please make sure to check your email regularly for updates.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        <Link to="/contactus" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ThankYou;
