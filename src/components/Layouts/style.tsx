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
  padding: ${theme.spacing.double(24, 0)};
  h3 {
    color: ${theme.colors.primary[300]};
    font-family: ${theme.fontFamily.almarenaDisplayBold};
    text-align: center;
    font-size: ${theme.fontSize.custom(2)};
    margin: 0;
  }
`;
export const NavContainer = styled.ul`
  padding-inline-start: 0;
`;

export const SideNav = styled.li<{ active: boolean }>`
  list-style: none;
  width: 300px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    overflow-x: none;
    width: 100%;
    padding: ${theme.spacing.double(12, 24)};
    background: ${({ active }) =>
      active ? theme.colors.primary[200] : theme.colors.white};
    span {
      display: inline-block;
      color: ${theme.colors.black[300]};
      font-size: ${theme.fontSize.custom(1.2)};
      font-family: ${theme.fontFamily.euclidRegular};
      margin-left: ${theme.spacing.custom(5)};
      color: ${({ active }) =>
        active ? theme.colors.white : theme.colors.black[300]};
    }
    svg {
      path {
        fill: ${({ active }) =>
          active ? theme.colors.white : theme.colors.black[300]};
      }
    }

    &:hover {
      background: ${theme.colors.primary[200]};
      span {
        color: ${theme.colors.white};
      }
      svg {
        path {
          fill: ${theme.colors.white};
        }
      }
    }
  }
`;
