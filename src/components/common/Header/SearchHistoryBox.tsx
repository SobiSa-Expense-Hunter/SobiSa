/* eslint-disable consistent-return */
import { motion } from 'framer-motion';
import styled from 'styled-components';

import * as Icons from '@/assets/Icons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';
import { UserSearchHistory } from '@/types/product';

interface SearchHistoryBoxProps {
  searchHistory: UserSearchHistory;
  onDelete: (key: string) => void;
}

const SearchHistoryBox = ({ searchHistory, onDelete }: SearchHistoryBoxProps) => {
  const { product: thisProduct, searchDate } = searchHistory;

  return (
    <SearchHistoryBackground whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Emoji width='14px' height='14px' />
      <Font.Medium>{thisProduct.title}</Font.Medium>
      <Font.Small>{searchDate}</Font.Small>
      {/* Description : searchHistory data를 get 해오며 title이 빈 값은 삭제하는 로직 존재  */}
      <DeleteButton onClick={() => onDelete(thisProduct.title as string)}>
        <Icons.Delete width={8} height={8} />
      </DeleteButton>
    </SearchHistoryBackground>
  );
};

export default SearchHistoryBox;

const SearchHistoryBackground = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-height: 61px;
  padding: 20px calc(2vh + 16px);
  gap: 20px;

  :hover {
    background-color: ${props => props.theme.colors.gray[1]};
  }
`;

const Emoji = styled(Layout.Box)`
  background-color: ${props => props.theme.colors.gray[2]};
`;

const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  width: 20px;
  height: 20px;
`;
