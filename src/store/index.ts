import { createStore, Store } from 'redux';
import { ProdutosState } from './ducks/produtos/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  produtos: ProdutosState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
