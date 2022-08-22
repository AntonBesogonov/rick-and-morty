import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Support } from './pages/Support';
import { Navigation } from './components/Navigation';
import { Documentation } from './pages/Documentation';
import { PersonagePage } from './pages/PersonagePage';

function App() {
   return (
      <>
         <Navigation />
         <Routes>
            <Route path='/' element={<PersonagePage />} />
            <Route path='/support' element={<Support />} />
            <Route path='/documentation' element={<Documentation />} />
         </Routes>
      </>
   );
}
export default App;
