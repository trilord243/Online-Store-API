const URL = "https://api.escuelajs.co/api/v1/products";

const productList = async function () {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data[0]);
};
productList();
