import Styled, { css } from "styled-components";
import { Title } from '../Heading/styles';

export const Container = Styled.div`
    ${({ theme }) => css`
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      gap: ${theme.spacings.large};

      @media ${theme.media.ltmedium}{
        grid-template-columns: 1fr;
        text-align: center;
      }

      ${Title}{
        margin-bottom: ${theme.spacings.large};
      }
    `}
`;

export const TextContainer = Styled.div`
    ${({ theme }) => css`
        @media ${theme.media.ltmedium}{
            margin-bottom: ${theme.spacings.large};
        }
    `}
`;

export const ImageContainer = Styled.div`
    ${({ theme }) => css`
      
    `}
`;

export const Image = Styled.img`
    ${({ theme }) => css`
      
    `}
`;