import {
  LayoutContainer,
  Sidebar,
  PageContainer,
  PageContentContainer,
  Logo,
  NavContainer,
  SideNav,
} from "./style";
import Navbar from "../General/Navbar";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as UsersIcon } from "../../assets/images/svg/user.svg";
import { ReactComponent as DashboardIcon } from "../../assets/images/svg/dashboard.svg";
import { ReactComponent as SettingsIcon } from "../../assets/images/svg/settings.svg";
import { ReactComponent as ReportsIcon } from "../../assets/images/svg/reports.svg";

const navList = [
  {
    url: "/",
    name: "Dashboard",
    Icon: DashboardIcon,
  },
  {
    url: "/staff",
    name: "Users",
    Icon: UsersIcon,
  },
  {
    url: "/reports",
    name: "Reports",
    Icon: ReportsIcon,
  },
  {
    url: "/settings",
    name: "Settings",
    Icon: SettingsIcon,
  },
];
const Layout = ({ children }: any) => {
  const { pathname } = window.location;
  return (
    <LayoutContainer>
      <Sidebar>
        <Logo>
          <h3>Payroll</h3>
        </Logo>
        <NavContainer>
          {navList.map(({ url, name, Icon }) => (
            <SideNav active={pathname === url}>
              <Link to={`${url}`}>
                <Icon />
                <span>{name}</span>
              </Link>
            </SideNav>
          ))}
        </NavContainer>
      </Sidebar>
      <PageContainer>
        <Navbar />
        <PageContentContainer>{children}</PageContentContainer>
      </PageContainer>
    </LayoutContainer>
  );
};

export default Layout;
