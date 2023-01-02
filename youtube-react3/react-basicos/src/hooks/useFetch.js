import { useState, useEffect } from 'react';

// por defecto fetch utiliza el metodo GET
export const useFetch = (url) => {
  const [ data, setData] = useState(null);
  const [ isPending, setIsPending ]  = useState(true); 
  const [ error, setError ]  = useState(null);

  useEffect(() => {

  }, [url]);

  return
}
