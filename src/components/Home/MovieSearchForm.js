import React, {Fragment} from 'react';

// ES6 syntax
const MovieSearchForm = (props) => {
  return (
    <form 
    onSubmit={(e) => props.formSubmitted(e)}>
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
  </form> 
  )
}

export default MovieSearchForm;
