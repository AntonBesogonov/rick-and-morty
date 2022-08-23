import { IPersonage } from '../models/models';
import style from '../style/MainPage.module.css';

interface PersonageProps {
   personage: IPersonage;
}

export function MainPage({ personage }: PersonageProps) {
   return (
      <div className={style.element}>
         <div>{<img src={personage.image} alt={personage.name}></img>}</div>
         <div>
            <div>{<p>{personage.name} </p>}</div>
            <div>{<p>{personage.gender} </p>}</div>
            <div>{<p>{personage.type} </p>}</div>
            <div>{<p>в каком эпизоде видел впервые </p>}</div>
            <div>{<p>{personage.origin?.name} </p>}</div>
            <div>
               {
                  <p>
                     {personage.status} - {personage.species}
                  </p>
               }
            </div>
            <div>{<p>Last known location:{personage.location?.name} </p>}</div>
         </div>
      </div>
   );
}
