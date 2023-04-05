import Styled, { css } from "styled-components";

export const Container = Styled.div`
    ${({ theme }) => css`
      text-align: center;
      max-width: 58rem;
      margin: 0 auto;
    `}
`;

export const Html = Styled.div`
    ${({ theme }) => css`
      margin: ${theme.spacings.xlarge} 0; 
    `}
`;
