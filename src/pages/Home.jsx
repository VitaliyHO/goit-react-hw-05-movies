import { useState, useEffect } from "react";
import { getTrendingFilms } from "../servises/api";
import { MoviesList } from "../components/MoviesList";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingFilms().then(setMovies)
    }, []);

    return(
        <main>
            <h1>Trending today</h1>
        <MoviesList movies={movies}/>
        </main>
    )
};

export default Home;