import Styled, { css } from "styled-components";
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from "../Heading/styles";

const menuVisible = (theme) => css`
    visibility: visible;
    opacity: 1;
`

export const Container = Styled.div`
    ${({ theme, visible }) => css`
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;
        width:100%;
        border-bottom: ${theme.colors.mediumGray};
        background-color: ${theme.colors.white};
        transition: all 300ms ease-in-out;

        > ${SectionContainer}{
            padding-top:0;
            padding-bottom:0;
        }

        & ${Heading}{
            margin-top:0;
            margin-bottom:0;
        }

        @media ${theme.media.ltmedium}{
            height: 100vh;
            visibility: hidden;
            opacity: 0;
            ${visible && menuVisible(theme)}

            > ${SectionContainer}{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
                overflow-y: auto;
            }

            & ${Heading}{
                padding-bottom: ${theme.spacings.large};
                display:flex;
                justify-content:center;
            }
       }
    `}
`;

export const MenuContainer = Styled.div`
    ${({ theme }) => css`
       display:flex;
       justify-content: space-between;
       align-items: center;

       @media ${theme.media.ltmedium}{
        display: block;
        text-align:center;
        padding: ${theme.spacings.xxlarge} 0;
       }
    `}
`;

export const Button = Styled.button`
    ${({ theme, visible }) => css`
       display:none;
       z-index: 6;
       position: fixed;
       top: 2rem;
       right: 2rem;
       width: 4rem;
       height: 4rem;
       border:none;
       background-color: ${theme.colors.primaryColor};
       color: ${theme.colors.white};
       cursor: pointer;
       pointer-events: ${visible ? 'none' : 'all'};
    
       > svg{
        width: 2.5rem;
        height: 2.5rem;
       }

    @media ${theme.media.ltmedium} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `}
`;