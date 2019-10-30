import { action } from 'typesafe-actions';
import { ProdutosTypes, Produto } from './types';

export const loadRequest = () => action(ProdutosTypes.LOAD_REQUEST);

export const loadSuccess = (data: Produto[]) => action(ProdutosTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ProdutosTypes.LOAD_FAILURE);
