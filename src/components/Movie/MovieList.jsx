import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/button";
import "./movieList.css"
import { useDispatch, useSelector } from "react-redux";
import { setMovieList, addMovieFavorite } from "../store/store";
import ButtonAddFav from "../button/ButtonAddFav";
import 'boxicons'



const apiKey = process.env.REACT_APP_KEY
const apiImg = process.env.REACT_APP_IMG
function MovieList(props) {
    const movieList = useSelector((state) => state.movie.movieList);
    const favoriteMovies = useSelector((state) => state.movie.favoriteMovies);
    const dispatch = useDispatch();
 
    
    const getMovieList = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&include_adult=false`)
            .then((res) => {
                dispatch(setMovieList(res.data.results))
               
                
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
        })
    }
    
  
    
    useEffect(() => {
        getMovieList();
        
    }, [])

    const handleAddFavorite = (movie) => {
        if (movie && movie.id) {
           dispatch(addMovieFavorite(movie));
        } else {
            console.error("Invalid movie object:", movie);
        }
        
    };

    const isMovieFavorite = (movie) => {
        return favoriteMovies.some((fav) => fav.id === movie.id);
    }
   
    return (
        
           
            
        <div>
           
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
            {movieList.map((movie) => {
                return (
                    <div className="box relative box bg-gray-800 rounded-lg overflow-hidden" key={movie.id}>
                        <div className="absolute z-50 p-3 right-0">                            
                            <ButtonAddFav movie={movie} handleAddFavorite={handleAddFavorite} isMovieFavorite={isMovieFavorite(movie)}>
                            </ButtonAddFav>
                        </div>
                        <img className="w-full object-cover"  src={`${apiImg}/${movie.poster_path}`} />
                        
                        <div className="layer flex flex-col gap-3">
                            <h2 className="text-sm font-bold text-white text-center">{movie.title}</h2>
                            <p className="text-white text-md flex gap-2"><span><box-icon name='star' type='solid' color='#fffc00' ></box-icon></span> {movie.vote_average}</p>
                            <div>
                                {movie.genres?.map((genre) => (
                                    <p className="text-white text-sm" key={genre.id}>{genre.name}</p>
                                ))}
                            </div>
                            <Button id={movie.id}></Button> 
                        </div>
                    </div>
                )   
            })}
        </div>
        </div>
       
    );
}

export default MovieList