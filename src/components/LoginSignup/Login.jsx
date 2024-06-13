import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'; // Import icons

const LoginWithOTP = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <div className="flex justify-center">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png?f=webp" alt="Login Illustration" className="h-32 w-32"/>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700">Login with OTP</h2>
        <p className="text-sm text-center text-gray-600">Enter your log in Credentials</p>
        <div className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <select className="h-full py-2 pl-3 pr-1 text-gray-600 bg-transparent border-none focus:ring-0 focus:outline-none">
              <option value="IN">🇮🇳</option>
            </select>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full py-2 pl-2 pr-3 text-gray-700 border-none rounded-md focus:ring-0 focus:outline-none"
            />
          </div>
          <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
            Continue
          </button>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <span>Or Login Using</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
            <AiOutlineMail className="w-6 h-6"/>  
            <span className="ml-2">Email</span>
          </button>
          <button className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
            <AiOutlineWhatsApp className="w-6 h-6"/>
            <span className="ml-2">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginWithOTP;
