import { FC } from 'react';
import Header from '../Header'
import StyledLayout from './Layout.style'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <>
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  </>;
};

export default Layout;
