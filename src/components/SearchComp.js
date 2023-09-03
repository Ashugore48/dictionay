import React, { useState } from 'react';
import axios from 'axios';
import { addToHistory } from './searchHistorySlice';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

const SearchComp = () => {
  const [query, setQuery] = useState(''); // Input query state
  const [data, setData] = useState(null); // API response data state

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      // Make the API request when the query is not empty

      dispatch(addToHistory(query));
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('API error:', error);
          setData(null); // Clear data on error
        });
    }
  };

  const renderDefinitions = (definitions) => {
    return definitions.map((definition, index) => (
      <p key={index}>{`${index + 1}. ${definition.definition}`}</p>
    ));
  };

  return (
    <>
      <div className='search-bar'>
      <input
        className='input-box'
        type="text"
        placeholder="Enter a word to search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-btn' onClick={handleSearch}>Search</button>
      </div>
      {data && (
        <div className='comp'>
          <h2>{data[0].word}</h2>
          {data[0].phonetics.length > 0 && (
            <div>
              <audio controls>
                <source src={data[0].phonetics[0].audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p>{data[0].phonetics[0].text}</p>
            </div>
          )}
          {data[0].meanings.length > 0 &&
            data[0].meanings.map((meaning, index) => (
              <div key={index}>
                <h3>{meaning.partOfSpeech}</h3>
                {renderDefinitions(meaning.definitions)}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default SearchComp;
