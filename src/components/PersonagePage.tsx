import Error from '../pages/Error';
import { usePersonage } from '../data/data';
import ScrollToTop from 'react-scroll-to-top';
import MapPersonage from './MapPersonage';

export function PersonagePage() {
   const { error } = usePersonage();

   return (
      <div>         
         {error ? <Error /> : <MapPersonage />}
         <ScrollToTop smooth top={1200} color='rgb(32, 35, 41)' />
      </div>
   );
}

export default PersonagePage;
