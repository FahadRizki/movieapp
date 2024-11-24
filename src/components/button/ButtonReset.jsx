

function ButtonReset({setQuery}) {
    return (
        <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1" onClick={() => setQuery('')}>
                
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            >
    
            </path>
        </svg>
        </button>
    )
}

export default ButtonReset