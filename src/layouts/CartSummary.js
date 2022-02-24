import React from "react";
import { Dropdown, Label} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.name}
              <Label>
                {cartItem.quantity}
              </Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart-detail">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CartSummary;
