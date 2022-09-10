import { IPersonage } from '../models/models';
import style from '../style/MainPage.module.css';

interface PersonageProps {
   personage: IPersonage;
}

export function MainPage({ personage }: PersonageProps) {
   return (
      <div className={style.element}>
         <div className={style.photo}>{<img src={personage.image} alt={personage.name}></img>}</div>
         <div className={style.data}>
            <div className={style.nameStatus}>
               {<p className={style.name}>{personage.name} </p>}
               <div className={style.status}>
                  {
                     <p>
                        {personage.status} - {personage.species}
                     </p>
                  }{' '}
               </div>
            </div>

            <div className={style.lastLocation}>
               {<p className={style.location}>Last known location:</p>}
               {<p>{personage.location?.name}</p>}
            </div>

            <div className={style.from}>
               {<p className={style.location}>From:</p>}
               {<p>{personage.origin?.name} </p>}
            </div>
         </div>
         
      </div>
      
   );
}
