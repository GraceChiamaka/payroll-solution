import styled from "styled-components";
import theme from "theme";

export const PageWrapper = styled.div`
  padding: ${theme.spacing.double(0, 100)};
`;
export const Heading = styled.h3`
  font-size: ${theme.fontSize.hero};
  font-family: ${theme.fontFamily.euclidSemiBold};
  margin: 0;
  margin-bottom: ${theme.spacing.custom(30)};
`;

export const DataRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${theme.spacing.double(12, 0)};
`;
export const Title = styled.h3`
  width: 30%;
  color: ${theme.colors.primary[400]};
  font-family: ${theme.fontFamily.euclidMedium};
  font-size: ${theme.fontSize.normal};
`;
export const Text = styled.p`
  width: 40%;
  color: ${theme.colors.primary[400]};
  font-family: ${theme.fontFamily.euclidRegular};
  font-size: ${theme.fontSize.heading};
`;
