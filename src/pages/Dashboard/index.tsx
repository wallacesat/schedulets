import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';

import ListaProdutos from '../../components/ListaProdutos';
import Agendamento from '../../components/Agendamento';

import './styles.scss';

export default function Dashboard() {
  const produtos = useSelector((state: ApplicationState) => state.produtos.data);

  return (
    <>
      <div className="page-content shadow-box">
        <ListaProdutos
          produtos={produtos}
        />
      </div>
      <div className="page-content shadow-box">
        <Agendamento />
      </div>
    </>
  );
}