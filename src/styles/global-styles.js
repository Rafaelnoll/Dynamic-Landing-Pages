import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        font-size:62.5%;
        scroll-behavior: smooth;
    }

    body{
        font-size: 2.4rem;
        font-family: ${({ theme }) => theme.font.family.default};
    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: ${({ theme }) => theme.font.family.secondary};
        margin: ${({ theme }) => theme.spacings.large} 0;
    }

    p{
        margin: ${({ theme }) => theme.spacings.medium} 0;
    }
    
    ul,ol{
        margin: ${({ theme }) => theme.spacings.medium} 0;
        padding: ${({ theme }) => theme.spacings.medium} 0;
    }

    a{
        color: ${({ theme }) => theme.colors.secondaryColor};
    }

    .table-content{
        width:100%;
        overflow-y: auto;
        margin-top: ${({ theme }) => theme.spacings.medium};

        table{
            width:100%;

            caption{
                font-size:  ${({ theme }) => theme.font.sizes.small};
                font-weight: bold;
                text-align:left;
                margin-bottom: ${({ theme }) => theme.spacings.xsmall};
            }

            thead,tfoot{
                background-color: ${({ theme }) => theme.colors.mediumGray};
            }

            th, td{
                padding: ${({ theme }) => theme.spacings.xsmall};
                text-align: left;
                border: 0.1rem solid ${({ theme }) => theme.colors.mediumGray};
                font-size: 2rem;
                white-space: nowrap;
            }
        }
    }
`;