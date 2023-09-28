import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import mainDecorTop from '../img/main/Ellipse 2.png'
import mainDecorBot from '../img/main/Ellipse 1.png'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    input, div, section, ul, li {
        box-sizing: border-box;
    }

    h1,h2,h3,h4,p,span {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-family: var(--secondaryFont);
        font-weight: var(--regular);
        font-size: 30px;
        line-height: 45px;
    }
    ul {
        list-style:none;
        margin: 0;
        padding: 0; 
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        box-sizing: border-box;
        display: flex;
    }
    :root {
    --main: #F1F3F8;
    --delimeter: #E5E6ED;
    --black: #000000;
    --gray: #bdbdbd;
    --light-gray: #E0E0E0;
    --dark-grey: #A6A6A6;
    --backdrop: rgba(0, 0, 0, 0.25);
    --diagram-shadow: rgba(255, 255, 255, 0.20);
    --background-light-grey:rgba(255, 255, 255, 0.4);
    --background-light-grey: #e7eaf2;
    --background-gray: #E5E5E5;
    --white: #ffffff;
    --green: #24CCA7;
    --active-blue: #4A56E2;
    --blue:#6E78E8;
    --pink: #FF6596;
    --vector-color:#E7E5F2;
    --add-transaction-menu-color:rgba(255, 255, 255, 0.7);
    --error-message: #d50c0c;
    --transaction-underline-color: #dcdcdf;
    --transaction-item-bg-color: #ffffff;
    --baseFont: 'Circe', sans-serif;
    --secondaryFont: 'Poppins', sans-serif;
    --regular: 400;
    --bold: 700;
    }

    #root {
        min-height: 100vh;
    }

    main {
        margin: 0 auto;
        min-height: 817px;
        background-color: var(--main);
        position: relative;
        padding: 0 20px;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: bottom left, top right;

        @media screen and (min-width: 320px) {
            width: 320px;
        }
        @media screen and (min-width: 768px) {
            width: 768px;
            padding: 0 32px;

        }
        @media screen and (min-width: 1280px) {
            width: 1280px;
            display: flex;
            padding: 0 16px 0 18px;

            background-image: url('${mainDecorBot}'), url('${mainDecorTop}');
        }

    }
`;