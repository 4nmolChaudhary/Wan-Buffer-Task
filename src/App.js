import React from 'react';
import './App.css';
import './styles/Components.css'
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Content />
      </Provider>
    </div>
  );
}

export default App;
