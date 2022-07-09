import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <section className='about-section'>
        <h2>Error! Page not found.</h2>
        <Link to='/'>
          <button className='btn'>Go back</button>
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
