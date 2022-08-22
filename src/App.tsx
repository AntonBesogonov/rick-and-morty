import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Support } from './pages/Support';
import { Navigation } from './components/Navigation';
import { Documentation } from './pages/Documentation';

function App() {
   return (
      <>
         <Navigation />
         <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/support' element={<Support />} />
            <Route path='/documentation' element={<Documentation />} />
         </Routes>
      </>
   );
}
export default App;
