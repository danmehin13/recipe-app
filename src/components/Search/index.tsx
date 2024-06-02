import React, { useState } from 'react';
import { SearchContainer, SearchField, SearchButton } from './Search.style';
import { useSearchContext } from '../../context/SearchContext';

const Search: React.FC = () => {
  const { setSearchTerm } = useSearchContext();
  const [localSearchInput, setLocalSearchInput] = useState<string>('');
  const [localError, setLocalError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchInput(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (localSearchInput.trim()) {
      setSearchTerm(localSearchInput);
      setLocalError(false);
    } else {
      setLocalError(true);
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchField
          type='text'
          placeholder='Search recipes'
          onChange={handleChange}
          value={localSearchInput}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      {localError && <p>Please enter a search term</p>}
    </>
  );
};

export default Search;
