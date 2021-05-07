import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import "../css/custom.css"

const GbiBridged = () => {
  const { coolBackground } = useStaticQuery(
    graphql`
      query {
        coolBackground: file(relativePath: { eq: "cool-background.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const image = getImage(coolBackground)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage className="masthead" Tag="section" {...bgImage} preserveStackingContext>
      Test
    </BackgroundImage>
  )
}

export default GbiBridged
