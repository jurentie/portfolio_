import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage() {
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
      <h1>Intro</h1>
      <p>Hi, my name is Justin Rentie.</p>
      <p>
        I am a Software Engineer based in Denver, Colorado. Currently working in
        fintech with API Support at Worldpay from FIS.
      </p>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}
