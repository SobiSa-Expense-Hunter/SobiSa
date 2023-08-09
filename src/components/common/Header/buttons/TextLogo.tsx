import Link from 'next/link';

import * as Icons from '@/assets/Icons';
import * as Style from '@/components/common/Header/style';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

export default function TextLogo() {
  return (
    <Style.StyleTextLogo>
      <Link href='/'>
        <Font.Medium>SOBISA!</Font.Medium>
      </Link>
    </Style.StyleTextLogo>
  );
}
