import React, { useState } from 'react';
import DayPicker from 'react-day-picker';

import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../utils/date';

import 'react-day-picker/lib/style.css';
import './dayPickerSubscribe.scss';
import './styles.scss';

export default function Agendamento() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  function handleDayClick(day: Date) {
    setSelectedDay(day);
  }

  return (
    <div className="agendamento-container">
      <h3 className="titulo">Selecionar Hora</h3>
      <div className="agenda-content">
        <div className="calendario">
          <DayPicker
            locale="pt-BR"
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            onDayClick={handleDayClick}
            selectedDays={selectedDay}
          />
        </div>
        <div className="equipe-lista">
          <span className="titulo-horario">
          Selecione um serviço e a data para ver os horários disponíveis.
          </span>
        </div>
      </div>
    </div>
  );
}
