import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import './styles.scss';

import { Produto } from '../../store/ducks/produtos/types';

export default function Servico({ servico, paddingLeft, paddingRight }: {
  servico: Produto, paddingLeft: string, paddingRight: string }) {
  return (
    <>
      <div
        className={`servico-box ${servico.selecionado ? 'active' : ''}`}
        style={{
          paddingLeft,
          paddingRight,
        }}
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
          onClick={(e) => {}}
        />
      </div>
    </>
  );
}
