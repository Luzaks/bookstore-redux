import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

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
  filter: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
};

const store = createStore(
  rootReducer,
  initialState,
);

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
