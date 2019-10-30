import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <Header />
      <Dashboard />
    </Provider>
  </>
);

export default App;
