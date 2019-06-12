import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

export default ({ node }) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 675 },
    ...clientConfig.sanity
  )
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <caption>{node.caption}</caption>
    </figure>
  )
}
