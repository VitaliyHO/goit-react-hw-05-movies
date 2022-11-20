import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '027147d74224684ab0a3206ed50b1636' ;

export const getTrendingFilms = async() => {
    const {data:{results}} = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return results;
};

export const getFilmsById = async(id) => {
    const {data} = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
};

export const getFilmsByQuery = async(query) => {
    const {data:{results}} = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    return results;
};