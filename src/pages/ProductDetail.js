import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

const ProductDetail = () => {
  const { p_id } = useParams();

  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductDetail(p_id)
      .then((result) => setProductDetail(result.data));
  }, []);
  return (
    <div>
      <Card.Group style={{ marginTop: "1px" }}>
        <Card fluid>
          <Card.Content>
            <Image floated="right" size="medium" src={productDetail.imageUrl} />
            <Card.Header>{productDetail.name}</Card.Header>
            <Card.Meta>Stok Adeti:
              <strong> {productDetail.unitsInStock}</strong>
            </Card.Meta>
            <Card.Description> {productDetail.description} </Card.Description>
            <Card.Meta>Fiyat:
              <strong> $ {productDetail.price}</strong>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default ProductDetail;
