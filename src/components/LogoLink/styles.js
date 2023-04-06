import styled, { css } from "styled-components";

export const Container = styled.a`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;

        > img {
            max-height: 3rem;
        }
    `}
`