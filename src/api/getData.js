const getData = async () => {
  const result = await fetch('https://booky-api-v1.herokuapp.com/api/v1/books');
  const data = await result.json();

  return data;
};

export default getData;
