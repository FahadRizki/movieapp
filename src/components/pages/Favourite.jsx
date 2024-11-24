import { useEffect } from "react"
import { useSelector } from "react-redux"
import Button from "../Button/button"
import ButtonRemoveFav from "../button/ButtonRemoveFav"
import { removeMovieFavorite } from "../store/store"
import { useDispatch } from "react-redux"
import Navbar from "../Layouts/Navbar"

function AddMovie() {
    const favoriteMovies = useSelector((state) => state.movie.favoriteMovies)
   
    const dispatch = useDispatch()
    const handleRemoveFavorite = (movie) => {
        if (movie && movie.id) {
            dispatch(removeMovieFavorite(movie));
         } else {
             console.error("Invalid movie object:", movie);
         }
    }
    return (
        <div>
            <Navbar activeLink="addmovie"></Navbar>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
            {favoriteMovies?.map((movie) => {
                return (
                    <div className="box" key={movie.id}>
                        <div className="absolute z-50 p-3 right-0">      
                            <ButtonRemoveFav removeMovieFavorite={handleRemoveFavorite} movie={movie}></ButtonRemoveFav>                      
                        </div>
                        <img className="relative" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <div className="layer flex flex-col gap-3">
                            <h2 className="text-sm font-bold text-white text-center">{movie.title}</h2>
                            <p className="text-white text-sm"><span>⭐</span>{movie.vote_average}</p>
                            <Button id={movie.id}></Button> 
                        </div>
                    </div>
                )   
            })}
        </div>
        </div>
    )
}

export default AddMovie