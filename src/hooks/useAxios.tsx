import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

const swapiAxios = axios.create({
  baseURL: 'https://swapi.dev/api',
});

const useGetSwapi = (url: string) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    swapiAxios
      .get(url)
      .then((res) => setResponse(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return [response, error, loading] as const;
};

export default useGetSwapi;
