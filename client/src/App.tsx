import React from 'react';
import Layout from './pages/Layout';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
