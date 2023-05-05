import styled from 'styled-components';

import * as Buttons from './buttons';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 89px;

  width: 310px;
  height: 41px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.022em;

  color: #3d3d3d;

  img {
    width: 40px;
    height: 40px;
  }
`;

export { Header, Buttons };
