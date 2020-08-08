import React, {Fragment, useState, useEffect} from 'react';
import MovieSearchForm from './MovieSearchForm';

const MovieSearch = () => {

  const initialState = '';
  const [query, setQuery] = useState(initialState);

  const buildUrl = (query, page = 1) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=ff22151cbe2f68c90e1d8448c9923ad6&language=en-US&query=${query}&page=${page}&include_adult=false`
  }

  useEffect(() => {
    if (query.length === 0) {
      return;
    }
    
    const searchMovies = async () => {
      const response = await fetch(buildUrl(query));
      const data = await response.json();
      console.log(data);
    }
    
    searchMovies();

  }, [query]);

  const searchMovie = (e) => {
    setQuery(e.target.value);
  }

  const formSubmitted = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <Fragment>
      <MovieSearchForm 
        query={query}
        searchMovie={searchMovie}
        formSubmitted={formSubmitted}
      />
    </Fragment>
  )
}

export default MovieSearch;