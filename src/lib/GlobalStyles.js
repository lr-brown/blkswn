import { createGlobalStyle, css } from "styled-components"
import LeagueSpartan from "./font/LeagueSpartan-Bold.otf"
import { StyledIconBase } from "@styled-icons/styled-icon"

const Dark = css`
  :root {
    --accent: #f7bfb4;
    --sidetab: #2d394e;
    --backgroundColor: #171d26;
    --primaryTextColor: #ffffff;
    --icons: #ffffff;
    --buttons: #b797cc;
    --buttonsAlt: #3e0a48;
  }
`

const Light = css`
  :root {
    --accent: #3e0b47;
    --sidetab: #e0e0e0;
    --backgroundColor: #ffffff;
    --primaryTextColor: #000000;
    --icons: #000000;
    --buttons: #ffcdc3;
    --buttonsAlt: #f7ddd3;
  }
`

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: League Spartan;
    src: url(${LeagueSpartan});
  }

${Light}
@media (prefers-color-scheme: dark) {
   ${Dark}
}

body {
    padding: 0px;
    margin: 0px;
    font-family:League Spartan;
    background-color: var(--backgroundColor);
    line-height: normal;
    color:var(--primaryTextColor);
  }

#root {
    // Font sizes
    --title1: 20px;
    --title2: 18px;
    --headline: 16px;
    --body1: 16px;
    --body2: 14px;
    margin: 0px 0px;
    font-size: var(--body1);
    display: flex;
    align-items: stretch;
    flex-direction: column;
}

${StyledIconBase} {
    color: var(--icons);
  }

`
export default GlobalStyle
