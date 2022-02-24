import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

const Dashboard = () => {
  return (
    <>
    <ToastContainer  position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" element = {<ProductList/>}/>
              <Route path="/product" element = {<ProductList/>}/>
              <Route path="/product/:p_id" element = {<ProductDetail/>}/>
              <Route path="/cart-detail" element = {<CartDetail/>}/>
              <Route path="/product/add" element = {<ProductAdd/>}/>
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Dashboard;
