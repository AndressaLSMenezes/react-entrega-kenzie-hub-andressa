import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
html, body, div, span, label
h1, h2, h3, h4, p, img, ul, li,
figure, footer, header, nav, section, button, input, select, option {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: 'Inter', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: var(--grey-4);
}
ul {
	list-style: none;
}

#root {
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

}

:root {
  --color-primary: #FF577F;
  --color-primary-Focus: #FF427F;
  --Color-primary-Negative: #59323F;

  --Sucess: #3FE864;
  --Negative: #E83F5B;

  --grey-0: #F8F9FA;
  --grey-1: #868E96;
  --grey-2: #495057;
  --grey-3: #212529;
  --grey-4: #121214;

  --grey-opacity-1: rgba(33, 37, 41, 0.5);
  --white: #ffffff;

  --border-radius: 4px;

  --font-weight-bold: 700;
  --font-weight-semi-bold: 600;
  --font-weight-regular: 400;
  --font-weight-italic: 400;

  --font-size-large: 16px;
  --font-size-small: 12px;
}

`;
export default GlobalStyle;
