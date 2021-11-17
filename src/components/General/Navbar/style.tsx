import theme from "../../../theme";
import styled from "styled-components";

export const NavContainer = styled.nav`
  padding: ${theme.spacing.double(20, 24)};
  // box-shadow: 0px 2px 4px ${theme.colors.secondary[100]};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Notification = styled.div`
  cursor: pointer;
  width: ${theme.spacing.custom(32)};
  height: ${theme.spacing.custom(32)};
  margin-right: ${theme.spacing.custom(24)};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: ${theme.spacing.custom(24)};
    height: ${theme.spacing.custom(24)};
  }
`;

export const Avatar = styled.div`
  width: ${theme.spacing.custom(42)};
  height: ${theme.spacing.custom(42)};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
`;
