import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import ProductService from "../services/productService";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    let productService = new ProductService();
    productService.getCategories().then((result) => setCategories(result.data));
  }, []);

  return (
    <div>
      <Menu vertical inverted style={{ marginTop: "10px" }}>
        {categories.map((c) =>(
          <Menu.Item key={c.id}>{c.name}</Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Categories;
