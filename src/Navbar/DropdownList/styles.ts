import styled, { css } from 'styled-components';

const mediaQueryMargin = css`
  margin: 10px 0px;
`;

const Container = styled.div`
  margin-right: 10px;

  @media only screen and (max-width: 990px) {
    ${mediaQueryMargin}
  }

  @media only screen and (max-width: 770px) {
    ${mediaQueryMargin}
  }
`;

export { Container };
