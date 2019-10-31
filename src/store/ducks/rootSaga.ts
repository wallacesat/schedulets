import { all, takeLatest } from 'redux-saga/effects';

import { ProdutosTypes } from './produtos/types';
import { load } from './produtos/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProdutosTypes.LOAD_REQUEST, load),
  ]);
}
