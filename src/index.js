import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import rootReducers from './redux/store/store';
import thunk from "redux-thunk";


const store = createStore(rootReducers,applyMiddleware(thunk));


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
