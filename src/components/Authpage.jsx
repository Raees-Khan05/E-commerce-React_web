import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign up and login
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle logic here for either login or sign up
    if (isSignUp) {
      // Handle sign up logic
      console.log("Sign Up with:", formData);
    } else {
      // Handle login logic
      console.log("Log In with:", formData);
    }
    navigate('/'); // Redirect to home page after success
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </form>

        {/* Toggle between Sign Up and Login */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isSignUp
              ? 'Already have an account? '
              : "Don't have an account? "}
            <span
              className="text-purple-600 cursor-pointer hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
