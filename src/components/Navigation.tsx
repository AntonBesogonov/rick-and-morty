import { Link } from 'react-router-dom';
import style from '../style/Navigation.module.css';

export function Navigation() {
   return (
      <nav className={style.nav}>
         <div className={style.link}>
            <Link to='/' className={style.name}>
               HOME
            </Link>
         </div>
         <div className={style.link}>
            <Link to='/documentation' className={style.name}>
               DOCUMENTATION
            </Link>
         </div>
         <div className={style.link}>
            <Link to='/support' className={style.name}>
               SUPPORT
            </Link>
         </div>
      </nav>
   );
}
