import Styled, { css } from "styled-components";

export const Container = Styled.div`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
    `}
`;