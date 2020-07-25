import React, {Fragment} from 'react';

const MovieSearchForm = (props) => {
  return (
    <Fragment>
      <label htmlFor='movieSearchQuery'>Movie Search</label>
      <input 
        type='text' 
        name='movieSearchQuery' 
        id='movieSearchQuery'
        onChange={(e) => props.searchMovie(e)}
        value={props.query}
      >
      </input>
      <button 
        type='submit'>
          Search
      </button>
    </Fragment>
  )
}

export default MovieSearchForm;