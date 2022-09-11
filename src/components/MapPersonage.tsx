import { usePersonage } from '../data/data';
import { MainPage } from '../pages/MainPage';
import style from '../style/MapPersonage.module.css';
import ReactPaginate from 'react-paginate';
import '../style/Pogination.css';
import Loader from './Loader';
import NotLoader from './NotLoader';

export function MapPersonage() {
   const { personage, handlePageClick, pageCount, loading } = usePersonage();
   return (
      <>
         {loading ? <Loader /> : <NotLoader />}
         <ReactPaginate breakLabel='...' nextLabel='>' onPageChange={handlePageClick} pageRangeDisplayed={1} pageCount={pageCount} previousLabel='<' containerClassName='pogination' pageLinkClassName='page-num' previousLinkClassName='page-num' nextLinkClassName='page-num' activeLinkClassName='active' nextClassName='next' previousClassName='previous' />
         <div className={style.wrapper}>
            {personage.map((personage) => (
               <MainPage personage={personage} key={personage.id} />
            ))}
         </div>
      </>
   );
}

export default MapPersonage;
