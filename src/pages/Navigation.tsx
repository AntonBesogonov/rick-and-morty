import { Link } from 'react-router-dom';
import style from '../style/Navigation.module.css';
import icon from '../img/rick_96136.svg';

export function Navigation() {
   return (
      <nav className={style.nav}>
         <div className={style.iconWrapper}>
            <Link to='/' className={style.icon}>
               <a >
                  <img src={icon} alt='buy me a coffee' />
               </a>
            </Link>
            <div className={style.title}>Rick and Morty characters</div>
         </div>

         <div className={style.button}>
            <div className={style.link}>
               <Link to='/' className={style.name}>
                  HOME
               </Link>
            </div>

            <div className={style.link}>
               <Link to='/support' className={style.name}>
                  SUPPORT
               </Link>
            </div>
         </div>
      </nav>
   );
}
