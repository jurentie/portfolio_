import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#rgb(77, 77, 77)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        css={css`
          border-style: solid;
          border-width: thin;
          display: inline-block;
        `}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            JR
          </Link>
        </h1>
      </div>
      <div css={css`width:50%; float: right; padding-top:10px;`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
