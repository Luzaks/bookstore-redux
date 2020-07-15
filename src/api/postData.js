const postData = async (title, category) => {
  const body = {
    title,
    category,
  };

  const result = await fetch('http://localhost:3000/api/v1/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await result.json();
  return data;
};

export default postData;
