import styled from "styled-components";
import theme from "../../theme";

export const LayoutContainer = styled.div`
  background: ${theme.colors.primary[100]};
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const Sidebar = styled.div`
  background: ${theme.colors.white};
  width: ${theme.spacing.custom(300)};
  position: fixed;
  height: 100vh;
  overflow-x: hidden;
`;
export const PageContainer = styled.div`
  width: calc(100% - 300px);
  background: ${theme.colors.primary[100]};
  position: absolute;
  right: 0;
  min-height: 100vh;
`;
export const PageContentContainer = styled.div`
  padding: ${theme.spacing.double(20, 24)};
`;

export const Logo = styled.div`
  padding: ${theme.spacing.double(24, 48)};
  h3 {
    color: ${theme.colors.primary[200]};
    font-family: ${theme.fontFamily.euclidSemiBold};

    font-size: ${theme.fontSize.custom(1.7)};
    margin: 0;
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
`;
