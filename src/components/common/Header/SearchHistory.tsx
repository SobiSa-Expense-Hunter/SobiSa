import { motion } from 'framer-motion';
import styled from 'styled-components';

import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

const SearchHistory = ({ title }: { title: string }) => {
  return (
    <SearchHistoryBackground whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Emoji width='14px' height='14px' />
      <Font.Medium>{title}</Font.Medium>
    </SearchHistoryBackground>
  );
};

export default SearchHistory;

const SearchHistoryBackground = styled(motion.div)`
  display: flex;
  width: 100%;
  min-height: 61px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px calc(2vh + 16px);
  gap: 20px;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.gray[1]};
  }
`;

const Emoji = styled(Layout.Box)`
  background-color: ${props => props.theme.colors.gray[2]};
`;
