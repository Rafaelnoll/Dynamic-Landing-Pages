import Styled, { css } from "styled-components";

export const Container = Styled.p`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
    `}
`;