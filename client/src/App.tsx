import React from 'react';
import Layout from './pages/Layout';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
const App: React.FC = () => {
  return (
    <Provider store={store}> 
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
    </Provider>
    
  );
}

export default App;
