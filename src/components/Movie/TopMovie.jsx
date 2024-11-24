import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button/button";

function TopMovie(props) {
    const [topMovie, setTopMovie] = useState([]);
    const getTopMovie = () => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1')
            .then((res) => {
                setTopMovie(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
            
        })
    }
    useEffect(() => {
        getTopMovie();
    }, [])

    return (
        <div className="flex flex-col gap-5">
          {
            topMovie?.map((movie) => {
              return (
                
                <div key={movie.id} className="px-10 sm:px-10">
            
                    <div className="flex flex-col sm:flex-row border border-gray-700 bg-slate-900 rounded-md overflow-hidden">
                      <img className=" p-4"   src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                      <div className="p-4 flex flex-col gap-4 sm:gap-5 text-white">
                      <h1 className="text-lg sm:text-2xl font-bold">{movie.title}</h1>
                      <p className="text-sm sm:text-base text-gray-300">{movie.overview}</p>
                      <div className="flex flex-col sm:flex-col  sm:gap-4">
                        <p className="text-sm sm:text-base">Release Date: {movie.release_date}</p>
                        <p className="text-sm sm:text-base">Rating: {movie.vote_average}</p>
                      </div>
                      <Button id={movie.id} />
                    </div>
                    </div>
                 
                </div>
              )
            })
          } 
          
        </div>
    );
}   

export default TopMovie