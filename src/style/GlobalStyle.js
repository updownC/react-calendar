import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* { 
  font-family: 'Spoqa Han Sans', 'Sans-serif'; 
  font-weight: lighter;
  box-sizing: border-box;
  color: #495057;
  }

  html {
    margin: 0;
    font-size: 62.5%;
  }

  body {
    display:flex;
    justify-content:center;
    align-items:center;
    
    width: 100%;
    height: 100vh;
    margin: 0;
  }
`

export default GlobalStyle