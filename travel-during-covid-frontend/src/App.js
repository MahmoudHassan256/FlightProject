import React from 'react';

import { Provider } from 'react-redux';
import store from '../src/store'
import './App.css';
import Layout from './Components/Layout';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
  );
}

export default App;
