import React from 'react'

import SEO from '../components/SEO'
import { Container } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Headline>
        We listen and give your brand the visibility it needs.
      </Headline>
    </Container>
  </>
);

export default HomePage
