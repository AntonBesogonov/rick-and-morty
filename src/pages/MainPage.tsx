import { useState } from 'react';
import { usePersonage } from '../data/data';
import { IPersonage } from '../models/models';
import { PersonagePage } from './PersonagePage';

interface PersonageProps {
   personage: IPersonage;
}

export function MainPage({ personage }: PersonageProps) {
   
   
   return (
      <div>
         {<img src={personage.image} alt={personage.name}></img>}
         {<p>{personage.name}</p>}
      </div>
   );
}
