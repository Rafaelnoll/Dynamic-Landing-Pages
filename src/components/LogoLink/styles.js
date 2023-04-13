import styled, { css } from "styled-components";

export const Container = styled.a`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;

        > img {
            height: 3rem;
        }
    `}
`