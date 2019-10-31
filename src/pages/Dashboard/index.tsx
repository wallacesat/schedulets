import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';

import ListaProdutos from '../../components/ListaProdutos';
import Agendamento from '../../components/Agendamento';

import { loadRequest } from '../../store/ducks/produtos/actions';

import './styles.scss';

export default function Dashboard() {
  const produtos = useSelector((state: ApplicationState) => state.produtos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

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
