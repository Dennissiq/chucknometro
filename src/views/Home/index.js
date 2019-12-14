import React from 'react'

import { Container } from './style'

import RandomText from '../../components/RandomText'
import Categories from '../../components/Categories'

const Home = () => (
  <Container>
    <RandomText />
    <Categories />
  </Container>
)

export default Home
