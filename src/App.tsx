
import { MainPage } from './pages/MainPage';


import { Loader } from './components/Loader';
import { Error } from './components/Error';
import { usePersonage } from './data/data';

function App() {
   const { loading, error, personage } = usePersonage();

   return (
      <div>
         {loading && <Loader />}
         {error && <Error />}
         {personage.map((personage) => (
            <MainPage personage={personage} key={personage.id} />
         ))}
      </div>
   );
}

export default App;
