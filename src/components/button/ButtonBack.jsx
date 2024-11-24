import { Link } from "react-router-dom";
import 'boxicons'

function ButtonBack() {
    return (
        <Link to={'/home'}>
            <button className="text-white h-16 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="submit">
            <box-icon name='left-arrow-alt' color='#fdfdfd' ></box-icon>
            Back
            </button>
        </Link>
    );
}

export default ButtonBack