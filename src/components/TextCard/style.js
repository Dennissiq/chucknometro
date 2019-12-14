import styled from 'styled-components'
import { colors } from '../../config/styles/colors'

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-family: 'Special Elite';
    padding-bottom: 20px;
    text-transform: uppercase;
  }
`
export const Card = styled.div`
  border-radius: 10px;
  background-color: ${colors.brown};
  padding: 2rem;
  width: 350px;
  color: ${colors.light};
  h1,
  h3 {
    font-family: 'Special Elite';
  }

  text-align: justify;
`

export const ImageCard = styled.img`
  src: url(${props => props.src});
  width: 200px;
  margin-bottom: 35px;
  border-radius: 10px;
  border: 3px solid ${colors.dark};
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

export const BackButton = styled.div`
  margin-top: 15px;
  &:hover {
    color: ${colors.wildWestColor};
    cursor: pointer;
    text-decoration: underline;
  }
  color: ${colors.light} !important;
`
