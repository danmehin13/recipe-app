import { useEffect, useState } from 'react';
import GlobalStyle from './globalStyles';
import useFetch from './hooks/useFetch';
import Layout from './components/Layout';
import Search from './components/Search';
import Card from './components/Card';
import { useSearchContext } from './context/SearchContext';
import { RecipeData, ApiData } from './types/datatypes';

function App() {
  const { searchTerm } = useSearchContext();
  const [url, setUrl] = useState(import.meta.env.VITE_API_BASE_URL);

  useEffect(() => {
    if (searchTerm) {
      setUrl(`${import.meta.env.VITE_API_BASE_URL}?q=${searchTerm}`);
    } else {
      setUrl(import.meta.env.VITE_API_BASE_URL);
    }
  }, [searchTerm]);

  const { data, loading, error } = useFetch<ApiData>(url);
  const results = data?.results ?? [];

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Search />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {results.length ? results.map((recipe: RecipeData) => (
          <Card key={recipe.id} data={recipe} />
        )) : !loading && <p>No results found for search term: {searchTerm}</p>}
      </Layout>
    </>
  );
}

export default App;
