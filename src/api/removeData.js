const removeData = async book => {
  await fetch(`https://booky-api-v1.herokuapp.com/api/v1/books/${book.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default removeData;
