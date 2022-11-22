import { useState, useEffect } from "react";
import { getTrendingFilms } from "../servises/api";
import { MoviesList } from "../components/MoviesList";
import { H1, Main } from "../App.styled";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingFilms().then(setMovies)
    }, []);

    return(
        <Main>
            <H1>Trending today</H1>
        <MoviesList movies={movies}/>
        </Main>
    )
};

export default Home;