import SearchMovie from "../input/SearchMovie"
import { Link } from "react-router-dom";
import ButtonGenre from "../button/ButtonGenre";
import 'flowbite-react';
import { useState } from "react";

function Navbar(props) {
    const {activeLink} = props
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="navbar">
        <div className="flex justify-between items-center bg-black text-white p-4">
            <div className="text-2xl font-bold">
                <Link to="/home">
                    <img className="w-30 h-20 bg-transparent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xhPKLpDpn2NGyhW71Y-3i7CYfiBKel3c6kXPZy9Xpo3OYTZIjQYyCDtxGLIFrtVii0I&usqp=CAU" alt="" />
                </Link>
            </div>
            <div className="sm:hidden">
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>
            <ul className="hidden sm:flex gap-5 text-xl">
                <li className={`p-4 rounded-md ${activeLink === 'home' ? 'bg-gray-700' : ''}`}>
                    <Link to="/home">Home</Link>
                </li>
                <li className={`p-4 rounded-md ${activeLink === 'trending' ? 'bg-gray-700' : ''}`}>
                    <Link to="/trending">Trending</Link>
                </li>
                <li className={`p-4 rounded-md ${activeLink === 'addmovie' ? 'bg-gray-700' : ''}`}>
                    <Link to="/addmovie">Favorite</Link>
                </li>
                <div>
                    <ButtonGenre ></ButtonGenre>
                </div>
            </ul>
           
        </div>
        {isMenuOpen && (
            <ul className="sm:hidden flex flex-col items-center bg-black text-white gap-4 p-4">
                <li className={`p-4 rounded-md ${activeLink === 'home' ? 'bg-gray-700' : ''}`}>
                    <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
                </li>
                <li className={`p-4 rounded-md ${activeLink === 'trending' ? 'bg-gray-700' : ''}`}>
                    <Link to="/trending" onClick={() => setIsMenuOpen(false)}>Trending</Link>
                </li>
                <li className={`p-4 rounded-md ${activeLink === 'addmovie' ? 'bg-gray-700' : ''}`}>
                    <Link to="/addmovie" onClick={() => setIsMenuOpen(false)}>Favorite</Link>
                </li>
                <div>
                    <ButtonGenre></ButtonGenre>
                </div>
            </ul>
        )}
        <div className="flex justify-center items-center p-7  w-full">
            <SearchMovie />
        </div>
    </div>
);

}

export default Navbar;