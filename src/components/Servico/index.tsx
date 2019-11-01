import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import './styles.scss';

import { Produto } from '../../store/ducks/produtos/types';

export default function Servico({
  servico, paddingLeft, paddingRight, handleProductSelection, handleOpenModal,
}: {
  servico: Produto,
  paddingLeft: string,
  paddingRight: string,
  handleProductSelection: (idProduct: number) => void,
  handleOpenModal: (content: Produto) => void }) {
  return (
    <>
      <div
        className={`servico-box ${servico.selecionado ? 'active' : ''}`}
        style={{
          paddingLeft,
          paddingRight,
        }}
        onClick={() => handleProductSelection(servico.id)}
        onKeyDown={undefined}
        role="button"
        tabIndex={0}
      >
        <div className="servico-detalhes">
          <span className="titulo">{servico.titulo}</span>
          <span className="info">
            {`${servico.tempo} minutos, ${
              !servico.disponivel ? `R$${servico.preco}/hora` : 'Disponível'
            }`}

          </span>
        </div>
        <FaInfoCircle
          className="info-icon"
          cursor="pointer"
          onClick={(e) => handleOpenModal(servico)}
        />
      </div>
    </>
  );
}
