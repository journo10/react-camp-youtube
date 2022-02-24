import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate(); //istediğin route yönledirme

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate("/product");
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
         <Menu.Item  name="Product" as={NavLink} to="/product"></Menu.Item>
         <Menu.Item  name="Product-Add" as={NavLink} to="/product/add"></Menu.Item>

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />  }
            {isAuthenticated ? (
              <SignedIn handleSignOut={handleSignOut} />
            ) : (
              <SignedOut handleSignIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
