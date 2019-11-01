import React, { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth } from 'date-fns';
import DayPicker from 'react-day-picker';

import Equipe from '../Equipe';

import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../utils/date';

import { Agenda } from '../../pages/Dashboard/types';

import 'react-day-picker/lib/style.css';
import './dayPickerSubscribe.scss';
import './styles.scss';

export default function Agendamento({ initialDate = undefined, loading = false, agenda }: {
  initialDate?: Date | undefined,
  loading: boolean,
  agenda: Agenda | undefined
}) {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (initialDate) setSelectedDay(initialDate);
  }, [initialDate]);

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
            disabledDays={(!selectedDay && { from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) || undefined}
          />
        </div>
        {agenda ? (
          <div className="empty-lista">
            <span className="titulo-horario">
              Selecione um serviço e a data para ver os horários disponíveis.
            </span>
          </div>
        )
          : (
            <div className="equipe-lista">
              <span className="titulo">
                Selecionar equipe (opicional)
              </span>
              <Equipe />
            </div>
          )}
      </div>
    </div>
  );
}
