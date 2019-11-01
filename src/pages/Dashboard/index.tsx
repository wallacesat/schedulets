import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';

import { addDays, getTime } from 'date-fns';

import { ApplicationState } from '../../store';

import { Agenda, Response } from './types';

import ListaProdutos from '../../components/ListaProdutos';
import Agendamento from '../../components/Agendamento';
import Modal from '../../components/Modal';

import api from '../../services/api';

import { loadRequest } from '../../store/ducks/produtos/actions';
import { Produto } from '../../store/ducks/produtos/types';

import './styles.scss';


export default function Dashboard() {
  const [loading, setLoading] = useState<boolean>(false);
  const [initialDate, setInitialDate] = useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [agenda, setAgenda] = useState<Agenda | undefined>(undefined);
  const [modalContent, setModalContent] = useState<Produto | undefined>(undefined);

  const produtos = useSelector((state: ApplicationState) => state.produtos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  function handleProductSelection(idProduct: number): void {
    setLoading(true);

    const requestDate = getTime(addDays(new Date(), 1));
    const request = api.get(`/agenda/${idProduct}?date=${requestDate}`) as Response;

    setAgenda(request.data);
    setInitialDate(new Date(requestDate));
    setLoading(false);
  }

  function handleOpenModal(content: Produto): void {
    setModalContent(content);
    setIsOpen(true);
  }

  function handleCloseModal(): void {
    setIsOpen(false);
  }

  return (
    <>
      <div className="page-content shadow-box">
        <ListaProdutos
          produtos={produtos}
          handleProductSelection={handleProductSelection}
          handleOpenModal={handleOpenModal}
        />
      </div>
      <div className="page-content shadow-box">
        <Agendamento initialDate={initialDate} loading={loading} />
      </div>
      <Modal isOpen={isOpen}>
        {isOpen && modalContent && (
        <div className="servico-modal-content">
          <h3 className="titulo">{modalContent.titulo}</h3>
          <FaInfoCircle className="info-icon" />
          <span className="duracao">{`Duração: ${modalContent.tempo} minutos`}</span>
          <span className="preco">{`Preço: R$ ${modalContent.preco}/hora`}</span>
          <span className="descricao">{modalContent.descricao}</span>
          <button
            type="button"
            className="btn-ok"
            onClick={handleCloseModal}
          >
                OK
          </button>
        </div>
        )}
      </Modal>
    </>
  );
}
