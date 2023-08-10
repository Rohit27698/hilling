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
      {/* Shailesh*/}
      <Route path="/ourworlds" element={<OurWorld />}>
        service and product details page
      </Route>{" "}
      {/* gaurav*/}
      <Route path="/ourworlds/:id" element={<OurWorldDetails />}>
        Product Details page
      </Route>{" "}
      {/* gaurav*/}
      <Route path="/signup" element={<Signup />}>
        Signup
      </Route>{" "}
      {/* Akash*/}
      <Route path="/login" element={<Login />}>
        Login
      </Route>{" "}
      {/* Akash*/}
      <Route path="/address" element={<AddressPage />}>
        Address
      </Route>{" "}
      {/* Akhil*/}
      <Route path="/payment" element={<Payment />}>
        Payment
      </Route>{" "}
      <Route path="/LoadingPage" element={<LoadingPage />}>
        Payment
      </Route>{" "}
      {/* Akhil*/}
      <Route path="/blog" element={<Blog />}>
        Blog
      </Route>{" "}
      {/*Rishabh */}
      <Route path="/blog/:id" element={<BlogPost />}>
        BlogPost
      </Route>{" "}
      {/*Rishabh */}
      <Route path="/addBlog" element={<AddBlog />}>
        Add Blog
      </Route>{" "}
      {/*Rishabh */}
    </Routes>
  );
};

export default AllRoutes;
