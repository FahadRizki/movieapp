import { configureStore, createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList: [],
        favoriteMovies: [],
    },
    reducers: {
        setMovieList: (state, action) => {
            state.movieList = action.payload
        },
        addMovieFavorite: (state, action) => {
            const movie = action.payload;
            if (movie && movie.id) {
                if (!state.favoriteMovies.find((fav) => fav.id === movie.id)) {
                    state.favoriteMovies.push(movie);
                }
            } else {
                console.error("Invalid movie object in payload:", movie);
            }
    
        },
        removeMovieFavorite: (state, action) => {
            const movie = action.payload;
            if (movie && movie.id) {
                state.favoriteMovies = state.favoriteMovies.filter((fav) => fav.id !== movie.id);
            } else {
                console.error("Invalid movie object in payload:", movie);
            }
        },
}
})



export const {setMovieList, addMovieFavorite, removeMovieFavorite} = movieSlice.actions;

export const store = configureStore({
    reducer: {
        movie: movieSlice.reducer
    }
})



export default store