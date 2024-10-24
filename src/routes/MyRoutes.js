import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../products/Products";
import Register from "../register/Register";

function MyRoutes() {
  return (
    <>
      <Routes>
        {/* <Route path ='/' element={</>}/> */}
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
