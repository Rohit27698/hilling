import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import OurWorld from "../Components/OurWorld/OurWorld";
import OurWorldDetails from "../Components/OurWorld/OurWorldDetails";
import Signup from "../Components/LoginPage/Signup";
import Login from "../Components/LoginPage/Login";
import Blog from "../Components/Blog/Blog";
import BlogPost from "../Components/Blog/BlogPost";
import AddBlog from "../Components/Blog/AddBlog";
import AddressPage from "../Components/paymentAndAdress/AddressPage";
import Payment from "../Components/paymentAndAdress/Payment";
import LoadingPage from "../Components/paymentAndAdress/LoadingPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>{" "}
      <Route path="/ourworlds" element={<OurWorld />}>
        service and product details page
      </Route>{" "}
      <Route path="/ourworlds/:id" element={<OurWorldDetails />}>
        Product Details page
      </Route>
      <Route path="/signup" element={<Signup />}>
        Signup
      </Route>
      <Route path="/login" element={<Login />}>
        Login
      </Route>
      <Route path="/address" element={<AddressPage />}>
        Address
      </Route>
      <Route path="/payment" element={<Payment />}>
        Payment
      </Route>
      <Route path="/LoadingPage" element={<LoadingPage />}>
        Payment
      </Route>
      <Route path="/blog" element={<Blog />}>
        Blog
      </Route>
      <Route path="/blog/:id" element={<BlogPost />}>
        BlogPost
      </Route>
      <Route path="/addBlog" element={<AddBlog />}>
        Add Blog
      </Route>
    </Routes>
  );
};

export default AllRoutes;
