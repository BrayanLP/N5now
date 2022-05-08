
 
const API = 'https://627325216b04786a0901e96c.mockapi.io'
const getAll = async() => {
//   return http.get("/products");
// en caso de caerse el api activar las 2 lineas inferiores
// const result = [{"name":"Fantastic Fresh Chair","amount":11027,"price":"519.00","id":"5"},{"name":"Practical Concrete Hat","amount":18394,"price":"377.00","id":"3"},{"name":"Practical Concrete Hat","amount":18394,"price":"377.00","id":"3"},{"name":"Intelligent Steel Salad","amount":41174,"price":"541.00","id":"11"}]
// const output = result
const resut = await fetch(`${API}/products`)
  const output = resut.json()
  return output;
}; 
const ProductService = {
  getAll
};
export default ProductService;