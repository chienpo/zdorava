import React, { FC, PropsWithChildren } from 'react';

import { Header } from '~/core/components/header';
import { Footer } from '~/core/components/footer';

interface Props {
  headerMobileByDefault?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const Layout: FC<PropsWithChildren<Props>> = ({
  headerMobileByDefault = false,
  showHeader = true,
  showFooter = true,
  children,
}) => (
  <>
    {showHeader && <Header mobileByDefault={headerMobileByDefault} />}
    <main>{children}</main>
    {showFooter && <Footer />}
  </>
);
