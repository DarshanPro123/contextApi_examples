import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>World Wise</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
};

export default Home;
