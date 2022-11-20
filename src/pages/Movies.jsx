import { useState, useEffect } from "react";
import { getFilmsByQuery } from "../servises/api";
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from "../components/MoviesList";

const Movies = () => {

    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState('');
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        const movieName = params.get('query')
        if(!movieName) return;
        getFilmsByQuery(movieName).then(setMovie)
    }, [params]);

    const onInputChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setParams({query})
    }

    return(
        <>
        <form onSubmit={onSubmit}>
            <input onChange={onInputChange} type="text" />
            <button type="submit">Search</button>
        </form>
        <MoviesList movies={movie}/>
        </>
    )
};

export default Movies;