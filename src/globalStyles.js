// globalStyles.js
// AQUÍ AÑADIMOS ESTILOS GLOBALES A NUESTRA APP
import { createGlobalStyle } from 'styled-components';
import TimesNRCondensedBold from './fonts/TimesNRCondensedBold.ttf';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Times NR Condensed Bold';
    src: url(${TimesNRCondensedBold}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  body {
    margin: 0;
    padding: 0;
    background: #e2cddb;
    font-family: 'Roboto', sans-serif;
  }
`;
 
export default GlobalStyle;