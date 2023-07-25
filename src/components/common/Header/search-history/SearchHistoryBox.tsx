/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
import { motion } from 'framer-motion';
import styled from 'styled-components';

import * as Icons from '@/assets/Icons';
import * as Font from '@/styles/font';
import { UserSearchHistory } from '@/types/product';

interface SearchHistoryBoxProps {
  searchHistory: UserSearchHistory;
  onDelete: (e: React.MouseEvent, key: string) => void;
  onClick: (e: React.MouseEvent, history: UserSearchHistory) => void;
}

const SearchHistoryBox = ({ searchHistory, onDelete, onClick }: SearchHistoryBoxProps) => {
  const { product: thisProduct, searchDate: rawDate } = searchHistory;
  const { searchDate, searchTime } = makeTimeFormat(rawDate);
  return (
    <SearchHistoryBackground onClick={e => onClick(e, searchHistory)}>
      {/* !NOTE : searchHistory[] data를 get 해오며 title이
          빈 값은 삭제하는 로직이 부모 컴포넌트에 존재하기에 강제 형 변환 사용.
          Product data type이 모두 optional이기에 일단 해당 방법 사용 */}
      <DeleteButton onClick={e => onDelete(e, thisProduct.title as string)} className='delete'>
        <Icons.DeleteOrange width={20} height={20} />
      </DeleteButton>
      <Font.Medium style={{ flex: '1', wordBreak: 'keep-all' }}>{thisProduct.title}</Font.Medium>
      <DateFont>
        {searchDate} <span className='gray'>{searchTime}</span>
      </DateFont>
    </SearchHistoryBackground>
  );
};

export default SearchHistoryBox;

function makeTimeFormat(rawFullTime: string) {
  // !NOTE : raw data Format: 2023. 7. 12. 오후 5:03:12
  let [year, month, date, ampm, time] = rawFullTime.replaceAll('.', '').split(' ');
  year = year.slice(2);
  ampm = ampm === '오후' ? 'PM' : 'AM';
  time = time.slice(0, 4);

  return {
    searchDate: `${year}.${month}.${date}`,
    searchTime: `${ampm} ${time}`,
  };
}

const SearchHistoryBackground = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-height: 61px;
  padding: 20px;
  gap: 20px;

  :hover {
    .delete {
      opacity: 1;
    }
    background-color: ${props => props.theme.colors.gray[1]};
    transition: all 200ms;
  }
`;

const DeleteButton = styled.button`
  opacity: 0;
  cursor: pointer;
  border: none;
  background: none;

  width: 20px;
  height: 20px;
`;

const DateFont = styled(Font.XSmall)`
  .gray {
    color: ${({ theme }) => theme.colors.gray[2]};
  }
`;
