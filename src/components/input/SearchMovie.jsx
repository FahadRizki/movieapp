import axios from "axios";
import { useEffect, useState } from "react";
// import { MovieContext } from "../Movie/MovieContext";
import { Link } from "react-router-dom";
import { setMovieList } from "../store/store";
import { useDispatch} from "react-redux";
import ButtonReset from "../button/ButtonReset";
import SearchButton from "../button/ButtonSearch";
function Input() {
    const dispatch = useDispatch();
    
    const [query, setQuery] = useState('');
    const getMovieSearch = async() => {
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then((res) => {    
            dispatch(setMovieList(res.data.results))
            
        })
        .catch((err) => {
            console.log(err);
        })
        
    }
    useEffect(() => {
        getMovieSearch();
    }, [])

    return (
        <form className="form relative text-black">
            <SearchButton getMovieSearch={getMovieSearch}></SearchButton>  
            <input
                className="input rounded-full w-80 px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                placeholder="Search..."
                required=""
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}    
            />
            <ButtonReset setQuery={setQuery}/>
           
                
                
          
        
        </form>
    )
}

export default Input


