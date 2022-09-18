import { Route, Routes } from 'react-router-dom';
import { Support } from './pages/Support';
import { Navigation } from './pages/Navigation';
import { PersonagePage } from './components/PersonagePage';

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
