import Error from '../components/Error';
import Loader from '../components/Loader';
import { usePersonage } from '../data/data';
import { MainPage } from './MainPage';
import style from '../style/PersonagePage.module.css';
import ReactPaginate from 'react-paginate';

export function PersonagePage() {
   const { loading, error, personage, handlePageClick, pageCount } = usePersonage();

   return (
      <div>
         <ReactPaginate breakLabel='...' nextLabel='>' onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel='<' />
         {loading && <Loader />}
         {error && <Error />}

         {
            <div className={style.wrapper}>
               {personage.map((personage) => (
                  <MainPage personage={personage} key={personage.id} />
               ))}
            </div>
         }
      </div>
   );
}

export default PersonagePage;
