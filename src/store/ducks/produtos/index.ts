import { Reducer } from 'redux';
import { ProdutosState, ProdutosTypes } from './types';

const INITIAL_STATE: ProdutosState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ProdutosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProdutosTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProdutosTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case ProdutosTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
