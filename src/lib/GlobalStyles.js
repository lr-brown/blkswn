import { createGlobalStyle, css } from "styled-components"

const Dark = css`
  :root {
    --accent: #464962;
    --sidetab: #2d394e;
    --backgroundColor: #171d26;
    --primaryTextColor: #ffffff;
    --icons: #ffffff;
    --buttons: #b797cc;
    --buttonsAlt: #3e0a48;
  }
`

const GlobalStyle = createGlobalStyle`

   ${Dark}

body {
    padding: 0px;
    margin: 0px;
    font-family:'Roboto', sans-serif;
    background: var(--backgroundColor);
    line-height: normal;
    color:var(--primaryTextColor);
    
  }
button{
  background: none;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding:0px;
  font-weight: bold;
  font-family:'Roboto', sans-serif;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  
}

#root {
    // Font sizes
    --title1: 48px;
    --title2: 28px;
    --headline: 22px;
    --body: 16px;
    --secondarybody: 14px;
    height: 100vh;
    font-size: var(--body);
    display: flex;
    align-items: center;
    flex-direction: column;
    * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
}
}

`
export default GlobalStyle
