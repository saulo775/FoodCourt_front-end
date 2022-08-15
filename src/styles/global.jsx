import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --primary: #C39A6C;
        --green: #3CD307;
        --red: #D32007;
        --black: #303030;
        --white: #FFFFFF;
        --gray: #4B4B4B;
        --more-gray: #b4b4b4
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
        background-color: var(--black);
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
        font-family: 'roboto', sans-serif;
    }

    svg {
        cursor: pointer;
    }
`;