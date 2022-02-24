import React, { useState, useEffect } from "react";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCard } from "../store/actions/cartActions";
import { toast } from "react-toastify";

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
    toast.success(`${product.name} sepete eklendi.`)
  };
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
            <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Detay</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((p) => (
            <Table.Row key={p.id}>
              <Table.Cell>{p.name}</Table.Cell>
              <Table.Cell>{p.price}</Table.Cell>
              <Table.Cell>{p.unitsInStock}</Table.Cell>
              <Table.Cell>{p.description}</Table.Cell>
              <Table.Cell>
                <Link to={`/product/${p.id}`}>Detay</Link>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={()=>handleAddToCart(p)}>Sepete Ekle</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default ProductList;
