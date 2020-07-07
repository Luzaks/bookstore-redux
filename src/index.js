import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import { createStore } from 'redux';
import App from './components/App';
import { createCreator, removeCreator } from './actions';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line no-unused-vars
const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'Harry Potter',
      category: 'Fantasy',
    },
    {
      id: Math.random(),
      title: 'Harry Potter 2',
      category: 'Fantasy',
    },
    {
      id: Math.random(),
      title: 'Harry Potter 3',
      category: 'Fantasy',
    },
  ],
};

const store = createStore(
  // reducer
);

store.dispatch(createCreator());
store.dispatch(removeCreator());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
