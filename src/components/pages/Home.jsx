import Navbar from "../Layouts/Navbar"
import MovieList from "../Movie/MovieList"
import React from "react"





function Home() {
    return (
            <div className="bg-black  ">
                <Navbar activeLink="home"></Navbar>
                <MovieList ></MovieList>
            </div>
       
    )
}

export default Home