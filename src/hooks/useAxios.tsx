import axios from 'axios';
import { useState, useEffect } from 'react';

const swapiAxios = axios.create({
  baseURL: 'https://swapi.dev/api',
});

const useGetSwapi = (url: string) => {
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    swapiAxios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return [response, error, loading] as const;
};

export default useGetSwapi;
