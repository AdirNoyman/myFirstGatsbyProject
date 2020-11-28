import React from "react";
import Layout from "../components/Layout";

export default function error() {
  return (
    <Layout style={{ padding: "3%" }}>
      <h1>Ooops...wrong address....</h1>
      <p style={{ fontSize: "3em" }}>404</p>
      <img
        src="https://images.unsplash.com/photo-1588791181011-697d7e84c24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
        alt="error"
        style={{ borderRadius: "10%", width: 500, height: 500 }}
      />
    </Layout>
  );
}
