import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:wght@300&display=swap');
    
    *{
        margin:0;
        padding:0;
    }

    html{
        font-size:62.5%;
    }

    body{
        font-size: 2.4rem;
        font-family: ${({ theme }) => theme.font.family.default};
    }
    
    h1{
        font-family: ${({ theme }) => theme.font.family.secondary};
    }
`;