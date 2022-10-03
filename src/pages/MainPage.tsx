import { IPersonage } from '../models/models';
import style from '../style/MainPage.module.css';

interface PersonageProps {
   personage: IPersonage;
}



export function MainPage({ personage }: PersonageProps) {
   
   const { name, status, species, image, location, origin } = personage;
   const { element, photo, data, nameStatus, styleName, lastLocation, styleLocation, from } = style;

   return (
      <div className={element}>
         <div className={photo}>{<img src={image} alt={name}></img>}</div>
         <div className={data}>
            <div className={nameStatus}>
               {<p className={styleName}>{name} </p>}
               <div className={nameStatus}>
                  {
                     <p>
                        {status} - {species}
                     </p>
                  }{' '}
               </div>
            </div>

            <div className={lastLocation}>
               {<p className={styleLocation}>Last known location:</p>}
               {<p>{location?.name}</p>}
            </div>

            <div className={from}>
               {<p className={styleLocation}>From:</p>}
               {<p>{origin?.name} </p>}
            </div>
         </div>
      </div>
   );
}
