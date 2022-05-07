import styled from 'styled-components';

import loader from './loader.gif';

export default function Spinner() {
  return (
    <Container>
      <Img src={loader} alt="loader" />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 999999;
`;

const Img = styled.img`
  width: 66px;
  height: 66px;
  position: absolute;
`;
