import React from 'react';
import { format } from 'date-fns';
import PT from './locale';


import { Equipe } from '../../../pages/Dashboard/types';

export default function DynamicTitle({ date, equipe, hora } : {date?: Date | undefined, equipe?: Equipe | undefined, hora?: Date | undefined}) {
  function farmatedDate(): string {
    const dataToString = date ? format(date, "dd 'de' MMMM", { locale: PT }) : 'Selecionar Hora';
    const equipeToString = equipe ? `com ${equipe.name}` : '';
    const horaToString = date ? format(date, "',' HH:MM") : '';

    return `${dataToString}${horaToString} ${equipeToString}`;
  }
  return (
    <h3 className="titulo">{farmatedDate()}</h3>
  );
}
