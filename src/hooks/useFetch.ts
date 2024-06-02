import { useState, useEffect, useRef } from 'react';

interface FetchOptions extends RequestInit {}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: string, options?: FetchOptions): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const prevUrlRef = useRef<string | null>(null);

  const fetchOptions: FetchOptions = options || JSON.parse(import.meta.env.VITE_API_OPTIONS || '{}');

  useEffect(() => {
    if (prevUrlRef.current === url) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    prevUrlRef.current = url;
  }, [url, fetchOptions]);

  return { data, loading, error };
};

export default useFetch;
