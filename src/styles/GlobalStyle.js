import { createGlobalStyle } from "styled-components";

import white from "../assets/white.jpg";

const GlobalStyle = createGlobalStyle`
        :root{
            --background: #001321;
            --flash-green: #00e3b4;;
            --black-primary: #000112;
            --black-secondary: #2B2C37; 
            --grey-primary: #3E3F4E;
            --grey-secondary: #828FA3;
            --light-bg:#F4F7FD;
            --dark-bg:#20212C;
            --white : #FFFFFF;
            --red : #EA5555;
            
        }
        *{
            margin: 0;
            padding: 0;
            list-style: none;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            text-decoration: none;
        } 
        body{
            line-height: 20px;
            color: #d3dbe2;
            font-size: 17px;
            font-weight: 400;
            background-color: var(--background);
        }   
        .navbar-active{
            position:fixed;
            background-color: var(--background);
        }
        .ghost{
            background-image: url(${white})!important;
            background-position: 50% 80px!important;
            background-size: auto 100%!important;
            background-repeat: repeat-x!important;
            transition: opacity 0.2s, color 0.2s, background-position 0.2s!important;
            a{
                color:white;
            }
        }
        .ghost:hover {
             background-image: url(${white})!important;
            background-position: 50% 60%!important;
            background-size: auto 110%!important;
            a {
                color: #121212 !important;
            }
    }
    `;

export default GlobalStyle;
