import * as React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Home" />
      {/* <div css={css`
        height: 100vh;
      `}>
        <div
          css={css`
            border-style: solid;
          `}
        >
          <h1>Justin Rentie</h1>
        </div>
      </div> */}
      <div>
        <div
          css={css`
            width: 45%;
            margin-right: 100px;
            display: inline-block;
          `}
        >
          <Img fluid={data.imageOne.childImageSharp.fluid} />
        </div>
        <div
          css={css`
            width: 45%;
            display: inline-block;
            height:400px;
          `}
        >
          <div
            css={css`
            min-height: 10em;
            display: table-cell;
            vertical-align: middle
            `}
          >
            {/* <div
              css={css`
                position: absolute;
                top: 50%;
                left: 30%;
                height: 30%;
                width: 50%;
                margin: -15% 0 0 -25%;
              `}
            > */}
              <h1>Intro</h1>
              <p>Hi, my name is Justin Rentie.</p>
              <p>
                I am a Software Engineer based in Denver, Colorado. Currently
                working in fintech with API Support at Worldpay from FIS.
              </p>
              <p>
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
              </p>
            </div>
          {/* </div> */}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "Snapchat-1519847229_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
