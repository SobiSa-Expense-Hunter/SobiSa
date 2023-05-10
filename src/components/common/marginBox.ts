import styled from 'styled-components';

const MarginBox = styled.div<{ margin: string }>`
  height: ${props => props.margin};
`;

export default MarginBox;
