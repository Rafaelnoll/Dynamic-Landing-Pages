import Styled, { css } from "styled-components";

export const Text = Styled.p`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
    `}
`;