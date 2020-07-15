const getData = async () => {
  const result = await fetch('http://localhost:3000/api/v1/books');
  const data = await result.json();

  return data;
};

export default getData;
