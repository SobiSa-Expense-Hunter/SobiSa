import type { SetStateAction } from 'react';

import * as Icons from '@/assets/Icons';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

import * as Style from './style';

interface HistoryHeaderProps {
  onNoticeTooltipShow: (value: SetStateAction<boolean>) => void;
  onToggleSideBar: (i?: number | undefined) => void;
}

const HistoryHeader = ({ onNoticeTooltipShow, onToggleSideBar }: HistoryHeaderProps) => {
  return (
    <Style.SearchHeader
      width='100%'
      alignItems='center'
      justifyContent='flex-start'
      margin='0 0 13px 0'
    >
      <Font.Large style={{ flex: 1 }}>이전 검색 내역</Font.Large>
      <Buttons.TransparentButton
        style={{ height: '14px' }}
        onMouseOver={() => onNoticeTooltipShow(true)}
        onMouseLeave={() => onNoticeTooltipShow(false)}
      >
        <Icons.QuestionMark width={14} height={14} />
      </Buttons.TransparentButton>
      <Layout.Box width='8px' />
      <Buttons.HeaderButton onClick={() => onToggleSideBar()} whileTap={{ scale: 0.8 }}>
        <Icons.Delete width={10} height={10} />
      </Buttons.HeaderButton>
    </Style.SearchHeader>
  );
};

export default HistoryHeader;
