import { LayoutContainer, PageContainer, PageContentContainer } from "./style";
import Navbar from "../General/Navbar";
import { SideBar } from "../General/Sidebar";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <SideBar />
      <PageContainer>
        <Navbar />
        <PageContentContainer>{children}</PageContentContainer>
      </PageContainer>
    </LayoutContainer>
  );
};

export default Layout;
