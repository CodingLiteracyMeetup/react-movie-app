import React, {Fragment, useState} from 'react';
import MovieSearchForm from './MovieSearchForm';

const MovieSearch = () => {

  const initialState = '';
  const [query, setQuery] = useState(initialState);

  const searchMovie = (e) => {
    setQuery(e.target.value);
  }

  return (
    <Fragment>
      <MovieSearchForm 
        query={query}
        searchMovie={searchMovie}
      />
    </Fragment>
  )
}

export default MovieSearch;