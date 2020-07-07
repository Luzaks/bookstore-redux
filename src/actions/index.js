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
      title: book.title,
      category: book.category,
    },
  };
}

export {
  createCreator,
  removeCreator,
};
