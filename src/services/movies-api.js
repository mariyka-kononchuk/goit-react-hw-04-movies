
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "5ca7faab7ad2001a71255816a5442565";

async function fetchMovies(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
    return fetchMovies(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
}

export function fetchMovieDetails(movieId) {
    return fetchMovies(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
}

