import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import img from "../images/image-1.jpg";

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-1.jpg" }) {
      size
      childImageSharp {
        fixed(width: 400, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-3.jpg" }) {
      size
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  const { fixed } = data.fixed.childImageSharp;
  const { fluid } = data.fluid.childImageSharp;

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={fluid} />
      </article>
    </section>
  );
};

export default Images;
