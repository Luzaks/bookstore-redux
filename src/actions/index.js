function createCreator(book) {
  return {
    type: 'CREATE_BOOK',
    payload: {
      id: book.id,
      title: book.title,
      category: book.category,
    },
  };
}

function removeCreator(book) {
  return {
    type: 'REMOVE_BOOK',
    payload: {
      id: book.id,
    },
  };
}

function filterCreator(filter) {
  return {
    type: 'CHANGE_FILTER',
    payload: filter,
  };
}

function fetchBooksSucceed(books) {
  return {
    type: 'FETCH_BOOK_SUCCEED',
    payload: books,
  };
}

function fetchBooksFailed(error) {
  return {
    type: 'FETCH_BOOK_FAILED',
    payload: error,
  };
}

export {
  createCreator,
  removeCreator,
  filterCreator,
  fetchBooksSucceed,
  fetchBooksFailed,
};
