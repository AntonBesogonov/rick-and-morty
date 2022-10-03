import iconCoffe from '../img/default-orange.png';
import style from '../style/Support.module.css';

export function Support() {
   
   const { wraper, image } = style;

   return (
      <div className={wraper}>
         <h1>Support The Rick and Morty API</h1>
         <p>Help to maintain The Rick and Morty API's infrastructure!</p>
         <p>
            If you are using the API for your app, your online tutorials or your
            coding challenges, please consider supporting us to help keep the
            project alive.
         </p>
         <p>
            We are not getting any money from this and we use our free time to
            keep the API running and the data up to date. Every contribution,
            however big or small, is super valuable for our future.
         </p>
         <p>Thanks!</p>
         <div className={image}>
            <a
               target='_blank'
               rel='noreferrer'
               href='https://www.buymeacoffee.com/axelfuh'
            >
               <img src={iconCoffe} alt='rick and morty' />
            </a>
         </div>
      </div>
   );
}
