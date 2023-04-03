import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        display: flex;
        flex-flow: row wrap;

        @media ${theme.media.ltmedium}{
           flex-direction: column;
           align-content: center;
        }
    `}
`