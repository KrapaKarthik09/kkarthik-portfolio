import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>

        {/* Toggle Menu Button for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/skills" className="hover:text-gray-400">Skills</Link>
          <Link to="/certifications" className="hover:text-gray-400">Certifications</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <Link to="/" className="block py-2 hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-gray-400" onClick={toggleMenu}>About</Link>
          <Link to="/skills" className="block py-2 hover:text-gray-400" onClick={toggleMenu}>Skills</Link>
          <Link to="/certifications" className="block py-2 hover:text-gray-400" onClick={toggleMenu}>Certifications</Link>
          <Link to="/projects" className="block py-2 hover:text-gray-400" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className="block py-2 hover:text-gray-400" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
