import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  margin: 2rem 0;
`

const SearchField = styled.input`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }
`

const SearchButton = styled.button`
  padding: .5rem 1rem;
  font-size: 1rem;
  background: #1CAC78;
  border-color: #1CAC78;
  color: black;
  font-weight: bold;

  &:hover {
    background: #32de84;
  }
`

export { SearchContainer, SearchField, SearchButton }