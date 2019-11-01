import React, { useState, useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import './styles.scss';
import { Equipe } from '../../pages/Dashboard/types';

export interface Selected {
  selected: boolean
}

type EquipeSelectable = Equipe & Selected;

const content: Equipe[] | EquipeSelectable[] = [
  {
    id: 1,
    name: 'fulano',
  },
  {
    id: 2,
    name: 'siclano',
  },
  {
    id: 3,
    name: 'beltrano',
  },
];

export default function AgendaEquipe({ handleSelectedEquipe }:{handleSelectedEquipe: (selectedEquipe: Equipe | undefined) => void}) {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState<Equipe | undefined>(undefined);
  const [equipe, setEquipe] = useState<EquipeSelectable[] | []>([]);

  useEffect(() => {
    setEquipe((content as Equipe[]).map((item): EquipeSelectable => ({ ...item, selected: false }) as EquipeSelectable));
  }, []);

  function showDropdownMenu(): void {
    setDisplayMenu(!displayMenu);
  }


  function selectEquipe(equipeSelected: EquipeSelectable): void {
    handleSelectedEquipe(equipeSelected);
    setSelected(equipeSelected);
    setDisplayMenu(false);
  }

  function unselectAllEquipes() {
    setEquipe((equipe as EquipeSelectable[]).map((item): EquipeSelectable => ({ ...item, selected: false })));
    handleSelectedEquipe(undefined);
    setSelected(undefined);
    setDisplayMenu(false);
  }

  return (
    <div className="dropdown" style={{ background: 'red', width: '200px' }}>
      <div
        onKeyDown={undefined}
        role="button"
        tabIndex={0}
        className="button"
        onClick={showDropdownMenu}
      >
        <FaUserAlt
          className="user-icon"
          cursor="pointer"
        />
        {selected ? selected.name : 'Alguém'}
      </div>

      { displayMenu ? (
        <ul>
          <li>
            <div
              onClick={unselectAllEquipes}
              className={!selected ? 'selected' : ''}
              onKeyDown={undefined}
              role="button"
              tabIndex={0}
            >
            Alguém
            </div>
          </li>
          {
            (equipe as EquipeSelectable[]).map((item): JSX.Element => (
              <li key={item.id} className={item.selected ? 'selected' : ''}>
                <div
                  onClick={() => selectEquipe(item)}
                  className={selected && selected.id === item.id ? 'selected' : ''}
                  onKeyDown={undefined}
                  role="button"
                  tabIndex={0}
                >
                  {item.name}
                </div>
              </li>
            ))
          }
        </ul>
      )
        : (
          null
        )}

    </div>
  );
}
