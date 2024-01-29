import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Component/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Component/Registerss/store';
import '../src/Component/Registerss/TableData.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </>
);

