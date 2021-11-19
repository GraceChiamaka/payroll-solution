import styled from "styled-components";
import theme from "../../theme";

export const LayoutContainer = styled.div`
  background: ${theme.colors.primary[100]};
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const PageContainer = styled.div`
  width: calc(100% - 300px);
  background: ${theme.colors.primary[100]};
  position: absolute;
  right: 0;
  min-height: 100vh;
  ${theme.media.lg} {
    width: calc(100% - 80px);
  }
`;
export const PageContentContainer = styled.div`
  padding: ${theme.spacing.double(20, 24)};
`;
