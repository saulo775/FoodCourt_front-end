import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --primary: #8C11BE;
        --primary-ligth: #A328D6;
        --scrollbar: #da83ff92;
        --green: #03AC00;
        --red: #CE2020;
        --black: #000000;
        --white: #FFFFFF;
        --gray: #868686;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: 300ms;
    }
    
    html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    }

    body {
        -webkit-font-smooth: antialiased;
        background-color: var(--primary);
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
    }

    h1, h2, h3, h4, input, textarea, a{
        //font-family: 'Raleway', sans-serif;
    }

    svg {
        cursor: pointer;
    }
`;