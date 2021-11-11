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
  font-weight: bold;
  font-family:'Roboto', sans-serif;
  
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
.slick-prev:before,
.slick-next:before
{
    font-family: 'slick';
    font-size: 0px;
    line-height: 1;
    opacity: 1;

}

.slick-prev,
.slick-next
{
    position: absolute;
    top: 50%;
    display: block;
    width: 48px;
    height: 48px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
}

.slick-next
{
    right: -55px;
}
.slick-prev
{
    left: -55px;
}

`
export default GlobalStyle
