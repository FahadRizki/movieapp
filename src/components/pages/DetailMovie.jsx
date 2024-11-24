import axios from "axios";
import { useParams } from "react-router"
import { useState, useEffect } from "react";
import'./detailmovie.css'
import TrailerMovie from "../Movie/TrailerMovie";
import 'boxicons'
import ButtonBack from "../button/ButtonBack";
function DetailMovie() {
    const [movieDetail, setMovieDetail] = useState({});
    const {id} = useParams();
    const getDetailMovie = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
            .then((res) => {
                setMovieDetail(res.data);
                
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getDetailMovie();
    }, [])
    return (
        

        <section className="bg-center bg-no-repeat bg-slate-900 bg-blend-multiply min-h-screen">
        <div className=" rounded-md absolute z-50 " >
            <ButtonBack />
        </div>
        <div className="p-4 sm:p-8 w-full mx-auto flex flex-col gap-8">
        
          <div className="w-full py-3 ">
            <TrailerMovie />
          </div>

          <div className="w-full  flex flex-col gap-6 bg-white rounded-md ">
          
            <div className="flex py-7 items-center justify-center ">
              <img
                className="w-32 sm:w-36 md:w-56 lg:w-80 rounded-md shadow-xl"
                src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                alt={movieDetail.title}
              />
            </div>
      
            <div className="w-full bg-slate-200  rounded-lg shadow-2xl p-8  dark:bg-gray-800 dark:border dark:border-gray-700">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {movieDetail.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mt-4">
                {movieDetail.overview}
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold mt-2">
                Release: {movieDetail.release_date}
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold mt-1">
                Duration: {movieDetail.runtime} minutes
              </p>
              <div className="flex items-center gap-2 text-yellow-400 mt-2">
                <span className="text-sm font-bold">{movieDetail.vote_average}</span>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <box-icon
                      key={index}
                      name="star"
                      type="solid"
                      color="#fffc00"
                    ></box-icon>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                  Genre:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {movieDetail.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="text-xs sm:text-sm bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg text-gray-800 dark:text-gray-300"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    )
}

export default DetailMovie