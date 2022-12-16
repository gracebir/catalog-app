import {createGlobalStyle} from "styled-components";

export const Globalstyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-dark-green: #1E6140;
        --color-green: #84C551;
        --color-red: #E74E13;
        --color-dark-red: #8D3200;
        --color-black: #d6d4d4;
        --color-white: #FFFFFF;
        --color-cream: #F8F8F8;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        background-color:#f2f8ed;
    }
`