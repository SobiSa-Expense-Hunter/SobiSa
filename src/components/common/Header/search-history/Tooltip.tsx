import * as Layout from '@/components/common/layout';
import ToolTip from '@/components/common/tooltip';

import * as Style from './style';

const NoticeTooltip = () => {
  return (
    <Layout.Box position='relative' width='100%' style={{ top: `-2px` }}>
      <Layout.Box position='absolute' width='100%'>
        <Style.TooltipPosition alignItems='flex-end' justifyContent='space-between' width='100%'>
          <ToolTip arrowAlign='right' arrowPosition='top'>
            검색 기록은 최대 8개까지 볼 수 있어요.
            <br />
            IOS의 경우 검색 기록은 최대 7일간 보관돼요.
          </ToolTip>
        </Style.TooltipPosition>
      </Layout.Box>
    </Layout.Box>
  );
};

export default NoticeTooltip;
