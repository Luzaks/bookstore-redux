const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload.id);
    case 'FETCH_BOOK_SUCCEED':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
