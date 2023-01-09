import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;

        color: var(--white)
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        background-color: transparent;
        font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial;
    }
    :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    --twitter-interaction-hover: hsl(199, 92%, 10%);
    --twitter-retweet-hover: hsl(153, 92%, 10%);
    --twitter-like-hover: hsl(343, 92%, 10%);
  }

  html {
    background-color: var(--primary)
  }
`