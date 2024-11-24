

function SearchButton({getMovieSearch}) {
    return (
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1" type="submit" onClick={(e) => {e.preventDefault(); return getMovieSearch();}} >
        <svg
        width="17"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="search"
        className="w-5 h-5 text-gray-700"
        >
        <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            stroke-width="1.333"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
        </svg>
    </button>
)}

export default SearchButton