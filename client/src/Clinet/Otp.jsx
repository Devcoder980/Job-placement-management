import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Otp() {

    const navigate = useNavigate();
    const location = useLocation();
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);;
    // const email = location.state && location.state.email;
    const formData = location.state.formData;
    const resOtp=location.state.resOtp;

    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [bool, setBool] = useState(true);



    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        switch (index) {
            case 1:
                setOtp1(value);
                if (value.length === 1) {
                    document.getElementById('otp2').focus();
                }
                break;
            case 2:
                setOtp2(value);
                if (value.length === 1) {
                    document.getElementById('otp3').focus();
                }
                break;
            case 3:
                setOtp3(value);
                if (value.length === 1) {
                    document.getElementById('otp4').focus();
                }
                break;
            case 4:
                setOtp4(value);
                break;
            default:
                break;
        }
    };


    const handleVerify = async (e) => {
        e.preventDefault();
        // setIsLoading(true);
        const otp = otp1 + otp2 + otp3 + otp4;
        console.log(String(otp) == String(resOtp));
        console.log("resopt " + resOtp);
        if (String(otp) === String(resOtp)) {
            // Verify OTP and register the user
            axios
                .post('http://localhost:5000/api/user/register', {
                    ...formData,
                    otp,
                })
                .then((res) => {
                    console.log(res);
                    setIsLoading(false);
                    // alert('Registration successful');
                    navigate('/login');
                })
                .catch((error) => {
                    console.error(error);
                    // Handle registration error
                });
        }
        else{
            alert('Invalid Otp duble check otp');
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your email {formData.email}</p>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleVerify} method="post">
                            <div className="flex flex-col space-y-16">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <div className="w-16 h-16">
                                        <input
                                            id="otp1"
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={otp1}
                                            onChange={(e) => handleOtpChange(e, 1)}
                                            maxLength="1" // Assuming OTP length is 4 digits
                                            required
                                        />
                                    </div>
                                    <div className="w-16 h-16">
                                        <input
                                            id="otp2"
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={otp2}
                                            onChange={(e) => handleOtpChange(e, 2)}
                                            maxLength="1"
                                            required
                                        />
                                    </div>
                                    <div className="w-16 h-16">
                                        <input
                                            id="otp3"
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={otp3}
                                            onChange={(e) => handleOtpChange(e, 3)}
                                            maxLength="1"
                                            required
                                        />
                                    </div>
                                    <div className="w-16 h-16">
                                        <input
                                            id="otp4"
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={otp4}
                                            onChange={(e) => handleOtpChange(e, 4)}
                                            maxLength="1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button type='submit' className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                            Verify Account
                                        </button>
                                    </div>
                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't receive code?</p>
                                        <a
                                            className="flex flex-row items-center text-blue-600"
                                            href="http://"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Resend
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Otp;
