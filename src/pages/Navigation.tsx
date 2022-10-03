import { Link } from 'react-router-dom';
import style from '../style/Navigation.module.css';
import icon from '../img/rick_96136.svg';

export function Navigation() {
   const { nav, iconWrapper, title, button, link, name, styleIcon } = style;
   return (
      <nav className={nav}>
         <div className={iconWrapper}>
            <Link to='/' className={styleIcon}>
               <a>
                  <img src={icon} alt='buy me a coffee' />
               </a>
            </Link>
            <div className={title}>Rick and Morty characters</div>
         </div>

         <div className={button}>
            <div className={link}>
               <Link to='/' className={name}>
                  HOME
               </Link>
            </div>

            <div className={link}>
               <Link to='/support' className={name}>
                  SUPPORT
               </Link>
            </div>
         </div>
      </nav>
   );
}
