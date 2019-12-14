import styled from 'styled-components'
import { colors } from '../../config/styles/colors'

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const RandomJoke = styled.div`
  padding: 3rem;
  h1 {
    font-family: 'Special Elite';
  }
`

export const Button = styled.div`
  border-radius: 10px;
  background-color: ${colors.wildWestColor};
  font-family: 'Special Elite';
  font-size: 1.5rem;
  color: ${colors.brown};
  &:hover {
    color: ${colors.lightYellow};
  }
  padding: 20px;
  margin-right: 10px;
  margin-top: 20px;
  cursor: pointer;
`
