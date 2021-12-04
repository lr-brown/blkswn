import { createGlobalStyle, css } from "styled-components"

const Dark = css`
  :root {
    --backgroundColor: #171d26;
    --primaryTextColor: #ffffff;
    --icons: #ffffff;
    --primaryColor: #b797cc;
    --primaryColorTint: rgba(183, 151, 204, 0.2);
    --secondaryColorTint: rgba(62, 10, 72, 0.2);
    --secondaryColor: #3e0a48;
    --primaryGradient: linear-gradient(
      rgba(183, 151, 204, 1) 0%,
      rgba(118, 77, 144, 1) 100%
    );
  }
`

const GlobalStyle = createGlobalStyle`

   ${Dark}

body {
    padding: 0px;
    margin: 0px;
    font-family:'Roboto', sans-serif;
    background-color: var(--backgroundColor);
    background-image: url("/images/stardust.png");
    line-height: normal;
    color:var(--primaryTextColor);
  }

  
button{
  background: none;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding:0px;
  margin: 0px;
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
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      width: 12px;
      }
      ::-webkit-scrollbar-track {
        background: none; 
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(
          rgba(118, 77, 144, 1) 0%,
          rgba(183, 151, 204, 1) 100%
          );
        border-radius: 4px;        
      }
    }
}

`
export default GlobalStyle
