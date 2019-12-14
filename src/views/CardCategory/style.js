import styled from 'styled-components'
import { colors } from '../../config/styles/colors'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding: 1.5rem;
`
export const CategoryCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CategoryCard = styled.div`
  border-radius: 10px;
  background-color: ${colors.wildWestColor};
  color: ${colors.brown};
  &:hover {
    color: ${colors.lightYellow};
  }
  h1,
  h2 {
    font-family: 'Special Elite';
  }
  padding: 20px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  /* width: 375px; */
`

export const LinkRoute = styled(Link)`
  text-decoration: none;
`

export const Title = styled.div`
  padding-top: 2.5rem;
  h1 {
    font-family: 'Special Elite';
  }
`
