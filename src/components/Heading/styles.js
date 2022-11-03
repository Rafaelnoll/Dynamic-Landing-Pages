import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.big};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${titleMedia(theme)};
  `,
}

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

const titleMedia = (theme) => css`
  @media ${theme.media.ltmedium} {
    font-size: ${theme.font.sizes.large};
  }
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;