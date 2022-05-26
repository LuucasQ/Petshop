import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #000000;
        --second-color: #FFFFFF;
        --tertiary-color: #17a2b8;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 400 16px Roboto, sans-serif;
        
    }

    
`