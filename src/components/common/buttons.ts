import styled, { css } from 'styled-components';

export const Button = styled.button`
  appearance: none;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: ${props => props.theme.colors.mainColor};
  border: 0;
  border-radius: 6px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.022em;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: 'Pretendard Variable';
  cursor: pointer;
`;

export const ImageButton = styled(Button)`
  position: relative;
  appearance: none;
  border: 0;
  border-radius: 50%;
  padding: 0;
  box-sizing: border-box;
  height: fit-content;
  background: inherit;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  overflow: hidden;
`;

export const ModalButton = styled(Button)`
  width: 128px;
  height: 38px;
`;

export const ModalSubButton = styled(Button)`
  width: 128px;
  height: 38px;
  background: ${props => props.theme.colors.gray[1]};
  color: ${props => props.theme.colors.gray[4]};
`;

export const ModalLongButton = styled(Button)`
  width: 264px;
  height: 38px;
`;

export const BottomButton = styled(Button)`
  width: 310px;
  height: 55px;
  font-size: 14px;
`;

export const ShareButton = styled(Button)`
  padding: 20px;
  width: 310px;
  height: 61px;
  font-size: 14px;
  gap: 8px;
`;

export const CloseButton = styled(Button)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-image: url(/assets/icons/close.svg);
  background-repeat: no-repeat;
  background-position: center center;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));
`;

export const DefaultTagStyle = css`
  color: ${({ theme }) => theme.colors.gray[3]};
  background: ${({ theme }) => theme.colors.gray[0]};

  padding: 10px 15px;
  border-radius: 10px;
  border-style: none;

  font-family: 'Pretendard Variable';
  font-weight: 600;
`;
