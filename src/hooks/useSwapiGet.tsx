import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

type ReturnTypes = {
  response?: AxiosResponse;
  error?: AxiosError;
  isLoading: boolean;
};

const useSwapiGet = (url: string): ReturnTypes => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(url)
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { response, error, isLoading };
};

export default useSwapiGet;
