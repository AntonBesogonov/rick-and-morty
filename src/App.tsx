import './App.css';
import { MainPage } from './pages/MainPage';
//import { personage } from './data/data2';
import { useEffect, useState } from 'react';
import { IPersonage } from './models/models';
import axios from 'axios';
import { isPropertySignature } from 'typescript';

function App() {
   let [personage, setPersonages] = useState<IPersonage[]>([]);

   async function fetchPersonage() {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setPersonages(response.data.results);
      
   }

   useEffect(() => {
      fetchPersonage();
   }, []);

   return (
      <div>
         {personage.map((personage) => (
            <MainPage personage={personage} key={personage.id} />
         ))}
      </div>
   );
}

export default App;
