const API_KEY = "8684180685fad5ef0a37d091b9f25d9b"

const requests = {
    frtchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-MX`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-MX`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-MX`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-MX`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-MX`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-MX`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-MX`,
}

export default requests;