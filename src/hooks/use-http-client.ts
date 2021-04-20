import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: string } | null>(null);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      (activeHttpRequests.current as AbortController[]).push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        // eslint-disable-next-line max-len
        (activeHttpRequests.current as AbortController[]) = activeHttpRequests.current.filter(
          (requestCtrl) => requestCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          return new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (error_) {
        setError(error_.message);
        setIsLoading(false);
        throw error_;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      (activeHttpRequests as {
        current: AbortController[];
      }).current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
