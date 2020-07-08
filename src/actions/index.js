function createCreator(book) {
  return {
    type: 'CREATE_BOOK',
    payload: {
      id: Math.random(),
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

export {
  createCreator,
  removeCreator,
};
