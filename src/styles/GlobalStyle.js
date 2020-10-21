import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: 'Mario';
    src: url('../assets/PoetsenOne-Regular.ttf');
    font-size: normal;
    font-weight: normal;
  }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    background-color: #0870fd;
    font-family: 'Mario', sans-serif;
  }

  ul{
    list-style: none;
  }
`