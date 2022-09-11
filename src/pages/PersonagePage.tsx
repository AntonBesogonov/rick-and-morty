import Error from '../components/Error';
import Loader from '../components/Loader';
import NotLoader from '../components/NotLoader';
import { usePersonage } from '../data/data';
import ScrollToTop from 'react-scroll-to-top';
import MapPersonage from '../components/MapPersonage';

export function PersonagePage() {
   const { loading, error } = usePersonage();

   return (
      <div>
         
         {error ? <Error /> : <MapPersonage />}
         <ScrollToTop smooth top={1200} color='rgb(32, 35, 41)' />
      </div>
   );
}

export default PersonagePage;
