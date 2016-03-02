function getTitles(arr) {
  // returns an array of movie titles
  return arr.map(function(movie) {
    return movie.title;
  });
}

function generalAudienceMovies(arr) {
  // returns an array of movies rated 'G'
  return arr.filter(function(movie) {
    return movie.rating === "G";
  });
}

function ninetiesMovies(arr) {
  // returns an array of movies released in the 90s
  return arr.filter(function(movie) {
    return movie.releaseYear > 1989 && movie.releaseYear < 2000; 
  });
}

function terribleMovies(arr) { 
  // returns an array of movies with freshness scores of 0.10 or less
  return arr.filter(function(movie) {
    return movie.freshness <= 0.1;
  });
}

function reformatRuntimes(arr) {
  // returns an array of movie data with the runtimes are in HH:MM format.
  // For example, a movie that's 90 minutes long should have a runtime of '01:30'
  return arr.map((movie, idx) => {

    // copy the original movie object, except for runtime, which is handled below
    var newMovie = {
      title: movie.title,
      releaseYear: movie.releaseYear,
      rating: movie.rating,
      freshness: movie.freshness
    };

    // reformat the runtime into HH:MM format
    var hours = Math.floor(parseInt(movie.runtime / 60));
    var minutes = movie.runtime % 60;
    var formattedMinutes = minutes < 10 ? ('0' + minutes) : minutes;
    
    newMovie.runtime = '0' + hours + ':' + formattedMinutes;
    return newMovie;
  });
}

function marathonTime(arr) {
  // returns the cumulative runtime of all movies in the array
  return arr.reduce(function(prev, cur) {
    return prev + cur.runtime;
  }, 0);
}

function ratingCounts(arr) {
  // returns an object whose keys are movie ratings,
  // and whose values are the number of movies in the array with that rating
  return arr.reduce(function(prev, cur) {
    prev[cur.rating] = ++prev[cur.rating] || 1;
    return prev;
  }, {});
}

module.exports = {
  getTitles,
  generalAudienceMovies,
  ninetiesMovies,
  terribleMovies,
  reformatRuntimes,
  marathonTime,
  ratingCounts
}