import { Sidebar, NavContainer, SideNav, Logo, LogoXl, LogoSM } from "./style";
import { NavLink, useRouteMatch } from "react-router-dom";

import { ReactComponent as UsersIcon } from "../../../assets/images/svg/user.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/images/svg/dashboard.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/images/svg/settings.svg";
import { ReactComponent as ReportsIcon } from "../../../assets/images/svg/reports.svg";

interface NavProps {
  name: string;
  url: string;
  Icon: any;
}

const navList: NavProps[] = [
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

export const SideBar = () => {
  const newmatch = useRouteMatch();

  const isActivePath = (pathName: string, url: string) => {
    if (pathName && pathName !== "" && pathName !== "/") {
      if (
        pathName &&
        url &&
        url !== "" &&
        url !== "/" &&
        pathName.includes(url)
      ) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <Sidebar>
      <Logo>
        <LogoXl>
          <h3>Payroll</h3>
        </LogoXl>
        <LogoSM>
          <h3>PAY</h3>
        </LogoSM>
      </Logo>
      <NavContainer>
        {navList.map(({ url, name, Icon }) => (
          <NavLink
            exact
            to={`${url}`}
            key={`/${url}`}
            isActive={() =>
              url === newmatch.url || isActivePath(newmatch.url, url)
            }
          >
            <SideNav>
              <Icon />
              <span>{name}</span>
            </SideNav>
          </NavLink>
        ))}
      </NavContainer>
    </Sidebar>
  );
};
