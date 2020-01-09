import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/books';

const initState = [
  {
    key: new Date().getTime() + 1,
    title: 'Woof stories',
    author: 'Dulce',
    category: 'Action',
  },
  {
    key: new Date().getTime() + 2,
    title: 'Kitchen woofs',
    author: 'Dulce',
    category: 'Learning',
  },
  {
    key: new Date().getTime() + 3,
    title: 'Be the Woof',
    author: 'Dulce',
    category: 'Biography',
  }
];
export const store = createStore(rootReducer, initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
