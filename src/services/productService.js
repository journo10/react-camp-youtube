import axios from "axios";

export default class ProductService {
  //get product
  getProducts() {
    return axios.get("http://localhost:5000/products");
  }

  //product detail
  getProductDetail(id) {
    return axios.get("http://localhost:5000/products/" + id);
  }

  //get category
  getCategories() {
    return axios.get("http://localhost:5000/categories");
  }
}
