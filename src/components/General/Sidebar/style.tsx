import styled from "styled-components";
import theme from "theme";

export const Sidebar = styled.div`
  background: ${theme.colors.white};
  width: ${theme.spacing.custom(300)};
  position: fixed;
  height: 100vh;
  overflow-x: hidden;
  ${theme.media.sm(575)} {
    width: ${theme.spacing.custom(80)};
  }
`;

export const Logo = styled.div`
  padding: ${theme.spacing.double(24, 48)};
  h3 {
    color: ${theme.colors.primary[200]};
    font-family: ${theme.fontFamily.euclidSemiBold};

    font-size: ${theme.fontSize.custom(1.7)};
    margin: 0;
  }
  ${theme.media.sm(575)} {
    padding: ${theme.spacing.double(24, 12)};
  }
`;
export const LogoXl = styled.div`
  ${theme.media.sm(575)} {
    display: none;
  }
`;
export const LogoSM = styled.div`
  ${theme.media.sm(575)} {
    display: block;
  }
`;
export const NavContainer = styled.ul`
  padding-inline-start: 0;
  margin: 0;
  margin-top: 2rem;
  list-style: none;
  width: 100%;
  a {
    text-decoration: none;
    display: block;
    position: relative;
  }
  a.active {
    li {
      svg {
        path {
          fill: ${theme.colors.primary[200]};
        }
      }
      span {
        color: ${theme.colors.primary[200]};
      }
    }
    &::after {
      content: "";
      height: 100%;
      border-right: ${theme.border.custom("3px", theme.colors.primary[200])};
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

export const SideNav = styled.li`
  display: flex;
  align-items: center;

  padding: ${theme.spacing.double(12, 24)};
  background: ${theme.colors.white};
  position: relative;
  span {
    display: inline-block;
    color: ${theme.colors.black[300]};
    font-size: ${theme.fontSize.custom(1.2)};
    font-family: ${theme.fontFamily.euclidRegular};
    margin-left: ${theme.spacing.custom(5)};
    color: ${theme.colors.black[300]};
  }

  &:hover {
    background: ${theme.colors.primary[100]};
    span {
      color: ${theme.colors.black[300]};
    }
    svg {
      path {
        fill: ${theme.colors.black[300]};
      }
    }
  }
  ${theme.media.sm(575)} {
    span {
      display: none;
    }
  }
`;
