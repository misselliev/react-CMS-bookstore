import { createStore } from 'redux';
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
  },
];

const store = createStore(rootReducer, initState);

export default store;
