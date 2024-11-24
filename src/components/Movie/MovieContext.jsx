import React, { createContext, useState } from 'react';

// Buat context
export const MovieContext = createContext();

// Buat provider
export const MovieProvider = ({ children }) => {
    const [movieList, setMovieList] = useState([]);

    return (
        <MovieContext.Provider value={{ movieList, setMovieList }}>
            {children}
        </MovieContext.Provider>
    );
};
