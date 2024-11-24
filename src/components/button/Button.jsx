import { Link } from "react-router-dom"
function Button(props) {
    
     return (
            <Link to={`/home/${props.id}`}>
                <button className="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
                        >
                Detail
                </button>
            </Link>
        )



    }
export default Button


