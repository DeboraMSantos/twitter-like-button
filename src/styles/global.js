import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: sans-serif;
}

html,
body,
#root {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFD2E1;
}

`;