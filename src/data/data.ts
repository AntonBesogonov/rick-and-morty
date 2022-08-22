import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { IPersonage } from '../models/models';

export function usePersonage() {
   const [personage, setPersonages] = useState<IPersonage[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   async function fetchPersonage() {
      try {
         {
            setError('');
            setLoading(true);
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            setPersonages(response.data.results);
            setLoading(false);
         }
      } catch (e: unknown) {
         const error = e as AxiosError;
         setLoading(false);
         setError(error.message);
      }
   }

   useEffect(() => {
      fetchPersonage();
   }, []);

   return { personage, loading, error };
}
