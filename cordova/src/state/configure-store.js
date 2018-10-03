import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';

import rootReducer from './root-reducer';
import rootSaga from './sagas/root-saga';

const sagaMiddleware = createSagaMiddleware();

export default function getStore() {

  global.store = createStore(
    rootReducer(),
    undefined,
    compose(
      applyMiddleware(sagaMiddleware),
      autoRehydrate()
    )
  );

  global.persistor = persistStore (store, {storage: AsyncStorage, blacklist: ['nav']});

  sagaMiddleware.run(rootSaga);

  return store;

};