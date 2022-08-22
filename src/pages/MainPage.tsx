import { IPersonage } from '../models/models';

interface PersonageProps {
   personage: IPersonage;
}

export function MainPage({ personage }: PersonageProps) {
   return (
      <>
         {<img src={personage.image} alt={personage.name}></img>}
         {<p>{personage.name}</p>}
      </>
   );
}
