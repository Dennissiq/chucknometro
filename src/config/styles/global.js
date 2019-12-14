import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    -moz-osx-font-smoothing: grayscale!important;
    margin: 0!important;
    @import url('https://fonts.googleapis.com/css?family=Special+Elite&display=swap');
    font-family: 'Special Elite', cursive !important;
    color: ${colors.dark};
    font-size: 1rem;
    height: auto!important;
  }
  button {
    cursor: pointer;
  }
`
export default GlobalStyle
