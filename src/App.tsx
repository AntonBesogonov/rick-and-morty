import { Route, Routes } from 'react-router-dom';
import { Support } from './components/Support';
import { Navigation } from './pages/Navigation';
import { PersonagePage } from './pages/PersonagePage';

function App() {
   return (
      <>
         <Navigation />
         <Routes>
            <Route path='/' element={<PersonagePage />} />
            <Route path='/support' element={<Support />} />            
         </Routes>
      </>
   );
}
export default App;
