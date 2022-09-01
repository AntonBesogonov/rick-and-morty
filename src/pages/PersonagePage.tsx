import Error from '../components/Error';
import Loader from '../components/Loader';
import { usePersonage } from '../data/data';
import axios, { AxiosError } from 'axios';
import { MainPage } from './MainPage';
import style from '../style/PersonagePage.module.css';
import { useEffect, useState } from 'react';
import { IPersonage } from '../models/models';
import ReactPaginate from 'react-paginate';

export function PersonagePage() {
   const [pageCount, setPageCount] = useState(0);
   const [currentPage, setCurrentPage] = useState(0);
   const [personage, setPersonages] = useState<IPersonage[]>([]);

   useEffect(() => {
      axios
         .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
         .then((response) => {
            setPersonages(response.data.results);
            const totalPage = Math.ceil(Number(response.data.info.count) / 20);
            setPageCount(totalPage);
         })
         .catch((error) => {
            alert('Нет данных');
         });
   }, [currentPage]);

   const handlePageClick = (e: any) => {
      setCurrentPage(e.selected + 1);
   };

   return (
      <div>
         <ReactPaginate breakLabel='...' nextLabel='>' onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel='<' />

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
