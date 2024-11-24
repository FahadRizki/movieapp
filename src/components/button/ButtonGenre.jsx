import axios from "axios"
import { useState, useEffect } from "react"
import 'flowbite-react'
import { setMovieList } from "../store/store"
import { useDispatch } from "react-redux"
import { Dropdown } from "flowbite-react"

function ButtonGenre(props) {
    const[genre, setGenre] = useState([])
    const dispatch = useDispatch()
    const getGenre = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${process.env.REACT_APP_KEY}&page=1`)
            .then((res) => {
                setGenre(res.data.genres)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getGenre();
    }, [])
    
    const handleClick = (e, item) => {
        e.preventDefault()
        dispatch(setMovieList([]))
        const genreId = e.target.id
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=${genreId}`)
            .then((res) => {
                dispatch(setMovieList(res.data.results))
            })
            .catch((err) => {
                console.log(err);
            })
    }
        
 

     

        
    return (
        
       

        <div className="bg-black">
            <Dropdown label={<span className="text-white text-xl">Genre</span>} style={{background: "black", padding:"10px"}} >
            {genre.map((item) => {
                return (
                    <div key={item.id} className="flex justify-center flex-row px-5" >
                        <button id={item.id} className="w-full p-3 rounded-md hover:bg-gray-100 text-black sm:p-1" onClick={handleClick}>{item.name}</button>
                    </div>
                )
            })}
        </Dropdown>
        </div>

    )
}

export default ButtonGenre