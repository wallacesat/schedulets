import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store/index';
import { Produto } from '../../store/ducks/produtos/types';

import Servico from '../Servico';

import './styles.scss';

export default function ListaProdutos({ produtos, handleProductSelection, handleOpenModal } : {
  produtos: Produto[],
  handleProductSelection: (idProduct: number) => void,
  handleOpenModal: (content: Produto) => void
}): React.ReactElement {
  const selectedProduct = useSelector((state: ApplicationState) => state.produtos.data.find((item) => item.selecionado));
  return (
    <div className="lista-servicos-box">
      <h3>{(selectedProduct && selectedProduct.selecionado) || 'Selecionar serviço'}</h3>
      <div className="servicos">
        {produtos
          && produtos.map((item, index) => (
            <Servico
              servico={item}
              paddingLeft={index === 0 || index % 2 === 0 ? '70px' : '20px'}
              paddingRight={index === 0 || index % 2 === 0 ? '20px' : '70px'}
              handleProductSelection={handleProductSelection}
              handleOpenModal={handleOpenModal}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
}
