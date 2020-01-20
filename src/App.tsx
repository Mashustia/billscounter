import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import store from './store/configureStor'

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
                  <h1>Hello world</h1>
              </header>
          </div>
      </Provider>
  );
};

export default App;
