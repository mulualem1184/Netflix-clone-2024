const API_KEY= process.env.API_KEY;
const requests={
   fetchTrending:'/trending/all/week?api_key=${API_KEY}&language=en-US',
   fetchNetflixOriginals:'/discover/tv?api_key=${API_KEY}&with_networks=213'
   fetchTopRatedMovies:'/monvie/top_rated?api_key=${API_KEY}&language=en-US',
   fetchActionMovies: '/discover/movie?api_key=${API_KEY}&with_ngeners=28',
   fetchComedyMovies: '/discover/movie?api_key=${API_KEY}&with_ngeners=35',
   fetchRomanceMovies: '/discover/movie?api_key=${API_KEY}&with_ngeners=10749',
   fetchTVshow: 'tv/popular?api_key=${API_KEY}&language=en-US&page=1'

};
export default requests;