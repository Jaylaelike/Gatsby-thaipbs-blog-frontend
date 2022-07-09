import { graphql } from "gatsby";
import React from "react";
import AuthorGrid from "../components/author/AuthorGrid";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import Pagination from "../components/Pagination";
import SEO from "../components/seo";

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Authors" />
      <div className="container">
        <PageHeader
          title="All Authors"
          description="บุคคลากรที่ร่วมแบ่งปันประสบการณ์ ในหัวข้อต่างๆ เป็นเพื่อนๆ พี่ๆน้องๆชาวสำนักวิศวกรรมไทยพีบีเอส ที่มีความสามารถ และคุณวุฒิ ในสาขางานที่หลากหลาย ที่อยากจะร่วมสร้างสรรค์สังคมการทำงานร่วมกันที่มีประสิทธิภาพ"
        />
        <AuthorGrid authors={authors} />
         {numberOfPages > 1 && (
          <Pagination
            baseURL="/authors"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
