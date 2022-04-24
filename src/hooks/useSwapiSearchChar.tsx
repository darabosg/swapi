import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { CharacterTypes } from '../utils/types';

type ReturnTypes = {
  response: CharacterTypes[];
  error?: AxiosError;
  isLoading: boolean;
};

const useSwapiSearchChar = (searchValue = '', debounce = 0): ReturnTypes => {
  const [response, setResponse] = useState<CharacterTypes[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (searchValue) {
      setIsLoading(true);
    }
    const timeoutRef = setTimeout(() => {
      if (searchValue) {
        axios
          .get(`/people?search=${searchValue}`)
          .then((res) => {
            setResponse(res.data.results);
          })
          .catch((err) => setError(err))
          .finally(() => setIsLoading(false));
      } else {
        setIsLoading(false);
        setResponse([]);
      }
    }, debounce);

    return () => {
      controller.abort();
      clearTimeout(timeoutRef);
    };
  }, [searchValue]);

  return { response, error, isLoading };
};

export default useSwapiSearchChar;
