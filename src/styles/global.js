import { createGlobalStyle } from "styled-components"

export const Reset = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  
    
}

button{
    cursor:pointer;
    
}
body{
   
}


`

export const GlobalStyle = createGlobalStyle`
:root{

    /* Basic */

    --black: #000000;
    --white: #ffffff;

    /* Colors */

    --color-primary : #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;


    /* gray scale */

    --gray-100: #333333;
    --gray-50: #828282;
    --gray-40: #BDBDBD;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;

    /* Feedback pallete */

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

    /* Typography */

    --font-primary: 'Inter', sans-serif;

}

.App{
    font-family: 'Nunito', sans-serif;
}
`
