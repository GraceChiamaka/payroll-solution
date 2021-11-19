import styled from "styled-components";
import theme from "theme";

export const PageWrapper = styled.div`
  padding: ${theme.spacing.double(0, 100)};
  width: 70%;
  ${theme.media.sm(575)} {
    padding: ${theme.spacing.double(0, 0)};
    width: 100%;
  }
`;
export const Heading = styled.h3`
  font-size: ${theme.fontSize.hero};
  font-family: ${theme.fontFamily.euclidSemiBold};
  margin: 0;
  margin-bottom: ${theme.spacing.custom(30)};
  border-bottom: ${theme.border.custom("0.4px", theme.colors.secondary[100])};
  padding-bottom: ${theme.spacing.small};
`;

export const DataRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${theme.spacing.double(12, 0)};
`;
export const Title = styled.p`
  width: 30%;
  color: ${theme.colors.primary[400]};
  font-family: ${theme.fontFamily.euclidRegular};
  font-size: ${theme.fontSize.normal};

  ${theme.media.sm(575)} {
    width: 100%;
  }
`;
export const Text = styled.p`
  width: 40%;
  color: ${theme.colors.primary[400]};
  font-family: ${theme.fontFamily.euclidRegular};
  font-size: ${theme.fontSize.normal};
  ${theme.media.sm(575)} {
    width: 100%;
  }
`;

export const InfoCard = styled.div`
  padding: ${theme.spacing.double(16, 0)};
  margin-bottom: ${theme.spacing.custom(48)};
  // background: ${theme.colors.white};
  background: #f3f3f3;
  padding: ${theme.spacing.double(8, 16)};
  background: rgba(255, 255, 255, 0.3);
  padding: 16px 12px;
  box-shadow: 0 0px 5px 0px rgba(85, 89, 106, 0.3);
  border-radius: ${theme.borderRadius.primary};
  h3 {
    color: ${theme.colors.primary[400]};
    font-family: ${theme.fontFamily.euclidMedium};
    font-size: ${theme.fontSize.normal};
    margin: 0;
    margin-bottom: ${theme.spacing.custom(24)};
  }
`;

export const DeductText = styled.p`
  width: 40%;
  color: ${theme.colors.secondary[200]};
  font-family: ${theme.fontFamily.euclidMedium};
  font-size: ${theme.fontSize.normal};
  ${theme.media.sm(575)} {
    width: 100%;
  }
`;
export const DeductTitle = styled.p`
  width: 30%;
  color: ${theme.colors.secondary[200]};
  font-family: ${theme.fontFamily.euclidMedium};
  font-size: ${theme.fontSize.normal};
  ${theme.media.sm(575)} {
    width: 100%;
  }
`;

export const TotalTitle = styled.h4`
  width: 30%;
  color: ${theme.colors.primary[400]};
  font-family: ${theme.fontFamily.euclidSemiBold};
  font-size: ${theme.fontSize.normal};

  ${theme.media.sm(575)} {
    width: 100%;
  }
`;
export const TotalText = styled.p`
  width: 40%;
  color: ${theme.colors.primary[400]};
  font-family: ${theme.fontFamily.euclidSemiBold};
  font-size: ${theme.fontSize.normal};
  ${theme.media.sm(575)} {
    width: 100%;
  }
`;
