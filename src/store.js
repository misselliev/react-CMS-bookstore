import { createStore } from 'redux';
import rootReducer from './reducers/index';

const bookArray = [
  {
    key: new Date().getTime() + 1,
    id: new Date().getTime() + 1,
    title: 'Woof stories',
    author: 'Dulce Stuart',
    category: 'Action',
  },
  {
    key: new Date().getTime() + 2,
    id: new Date().getTime() + 2,
    title: 'Kitchen woofs',
    author: 'Dulce Zamora',
    category: 'Learning',
  },
  {
    key: new Date().getTime() + 3,
    id: new Date().getTime() + 3,
    title: 'Be the Woof',
    author: 'Dulce Weso',
    category: 'Biography',
  },
];

const initState = {
  books: bookArray,
  filter: 'All',
};

const store = createStore(rootReducer, initState);

export default store;
