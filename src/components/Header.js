import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query myFirstQuery {
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        author
        data
        description
        title
      }
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(getData);
  console.log(data);

  const { title, person } = data.site.info;

  return (
    <div>
      <h1>The title is {title} 🤪</h1>
      <h2>
        The person is {person.name} and he is {person.age} years old.
      </h2>
    </div>
  );
};

export default Header;
