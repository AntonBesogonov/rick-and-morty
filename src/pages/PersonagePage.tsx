import Error from '../components/Error';
import Loader from '../components/Loader';
import { usePersonage } from '../data/data';
import { MainPage } from './MainPage';

export function PersonagePage() {
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
