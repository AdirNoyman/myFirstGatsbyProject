import React from "react";
import Header from "../components/Header";
import HeaderStatic from "../examples/HeaderStatic";
import Layout from "../components/Layout";

const examples = () => {
  return (
    <Layout>
      <div>
        <p>Hello from the examples page</p>
        <Header />
        <HeaderStatic />
      </div>
    </Layout>
  );
};

export default examples;
