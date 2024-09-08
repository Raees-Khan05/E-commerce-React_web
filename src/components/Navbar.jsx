import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'; // Icons
import Swal from 'sweetalert2'; // SweetAlert2 for stylish alerts

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(false); // Tracks login state
  const [menuOpen, setMenuOpen] = useState(false); // Tracks mobile menu state
  const navigate = useNavigate(); // For navigation

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignInClick = () => {
    if (isSignedIn) {
      setIsSignedIn(false); // Sign out logic
      setCartCount(0); // Reset cart count when signed out
    } else {
      navigate('/login'); // Navigate to login page
    }
  };

  const handleCartClick = () => {
    if (!isSignedIn) {
      // Show stylish alert if not signed in
      Swal.fire({
        icon: 'warning',
        title: 'Sign In Required',
        text: 'You need to sign in to view your cart items!',
        confirmButtonColor: '#6B46C1', // Purple confirm button
        backdrop: 'rgba(0,0,0,0.4)',
      });
    } else {
      navigate('/cart'); // Navigate to cart if signed in
    }
  };

  return (
    <header className="bg-white w-full text-purple-600 font-poppins shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">MyShop</Link>

        {/* Toggle Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Main Navigation */}
        <ul className={`lg:flex lg:items-center lg:static absolute top-full left-0 w-full lg:w-auto bg-white transition-all duration-300 ease-in-out lg:flex-row flex-col ${menuOpen ? 'block' : 'hidden'}`}>
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link to="/" className="hover:text-purple-800">Home</Link>
          </li>
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link to="/about" className="hover:text-purple-800">About</Link>
          </li>
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link to="/products" className="hover:text-purple-800">Products</Link>
          </li>
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link to="/contact" className="hover:text-purple-800">Contact Us</Link>
          </li>

          {/* Cart Icon, no background color */}
          <li className="lg:mx-4 my-2 lg:my-0 relative">
            <button
              onClick={handleCartClick}
              className={`hover:text-purple-800 flex items-center ${isSignedIn ? '' : 'cursor-not-allowed'}`}
              disabled={!isSignedIn}
            >
              <FaShoppingCart className="mr-2" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Sign In/Out Button */}
        <button
          onClick={handleSignInClick}
          className="hidden lg:inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </nav>

      {/* Mobile Sign In/Out Button */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} text-center`}>
        <button
          onClick={handleSignInClick}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 w-full mt-4">
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
