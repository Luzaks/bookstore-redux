const booksReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { books: [...state.books, action.payload] };
    case 'REMOVE_BOOK':
      return { books: [...state.books, action.payload] };
    default:
      return state;
  }
};

export default booksReducer;
