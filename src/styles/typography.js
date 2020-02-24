import { createGlobalStyle } from "styled-components"

export const primaryFont = "GT America"

const Typography = createGlobalStyle`
    @font-face {
        font-family: ${primaryFont};
        font-weight: 400;
        src: url("/static/GT-America-Standard-Regular.woff2") format("woff2"),
            url("/static/GT-America-Standard-Regular.ttf") format("truetype"),
            url("/static/GT-America-Standard-Regular.otf") format("opentype");
    }

    @font-face {
        font-family: ${primaryFont};
        font-weight: 700;
        src: url("/static/GT-America-Standard-Bold.woff2") format("woff2"),
            url("/static/GT-America-Standard-Bold.ttf") format("truetype"),
            url("/static/GT-America-Standard-Bold.otf") format("opentype");
    }  
    
    * {
        font-family: system-ui, "Helvetica Neue", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    }

    /* Type Scale */

    h1 {
    font-size: 2.25rem;
    }

    h2 {
    font-size: 1.5rem;
    }

    h3 {
    font-size: 1.25rem;
    }

    p {
    font-size: 1.25rem;
    margin: 0px;
    line-height: 140%;
    }

    li {
    font-size: 1.25rem;
    margin: 0px;
    line-height: 140%;
    }
`
export default Typography
