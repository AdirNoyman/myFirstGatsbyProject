import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import styles from "../components/products.module.css";
import Image from "gatsby-image";

const products = ({ data }) => {
  const { nodes: products } = data.allContentfulProduct;

  console.log(products);

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>More details</Link>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`;

export default products;
