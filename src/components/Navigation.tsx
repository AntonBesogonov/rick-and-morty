import { Link } from 'react-router-dom';

export function Navigation() {
   return (
      <nav>
         <span>
            <Link to='/support'></Link>
            <Link to='/documentation'></Link>
         </span>
      </nav>
   );
}


