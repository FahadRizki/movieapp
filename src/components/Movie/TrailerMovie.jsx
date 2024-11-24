import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

function TrailerMovie() {
    const { id } = useParams();
    const [movieTrailer, setMoviTrailer] = useState({});
    const opts = {
        height: '600',
        width: '100%',
        position: 'relative',
        right: '0',
        bottom: '0',
        Object: 'fit-cover',
        Object: 'center',
        backgroundColor: 'black',
        padding: '0',
      
      };
    const getVideo = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
            .then((res) => {
                setMoviTrailer(res.data.results[0]);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getVideo();
    }, [])

    return (
        <div className="relative w-full h-[600px] bg-black">
        <iframe
            src={`https://www.youtube.com/embed/${movieTrailer?.key}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>


    )
}

export default TrailerMovie