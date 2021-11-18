import styled from "styled-components";
import theme from "../../theme";

export const Heading = styled.div`
  h3 {
    font-size: ${theme.fontSize.hero};
    font-family: ${theme.fontFamily.euclidBold};
    margin: 0;
    margin-bottom: ${theme.spacing.custom(24)};
    color: #55596a;
  }
`;

export const Row = styled.div<{
  justify: "center" | "space-between";
  gap?: number;
}>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Col2 = styled.div`
  width: 23%;
  ${theme.media.sm(575)} {
    width: 100%;
  }
`;
export const Col7 = styled.div`
  width: 60%;
  ${theme.media.sm(575)} {
    width: 100%;
  }
`;
export const ColX = styled.div`
  width: 35%;
  ${theme.media.sm(575)} {
    width: 100%;
  }
`;
export const Col6 = styled.div`
  width: 50%;
`;
export const Col12 = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.primary};
  padding: ${theme.spacing.double(20, 24)};

  h3 {
    color: ${theme.colors.black[300]};
    margin-bottom: ${theme.spacing.custom(12)};
    font-family: ${theme.fontFamily.euclidLight};
    font-size: ${theme.fontSize.normal};
  }
  p {
    font-size: ${theme.fontSize.cardHeading};
    font-family: ${theme.fontFamily.euclidRegular};
  }
  ${theme.media.sm(575)} {
    margin-bottom: ${theme.spacing.custom(16)};
    h3 {
      font-size: ${theme.fontSize.small};
    }
  }
`;

export const BonusCard = styled.div`
  height: 100%;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.primary};
  padding: ${theme.spacing.double(20, 24)};
  margin-bottom: ${theme.spacing.custom(24)};
  max-height: ${theme.spacing.custom(190)};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary[100]};
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.primary[100]} !important;
  }
  h3 {
    margin: 0;
    margin-bottom: 24px;
  }
`;

export const ChartContainer = styled.div`
  margin-top: ${theme.spacing.custom(48)};
  margin-bottom: ${theme.spacing.custom(48)};
`;

export const Bonus = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${theme.border.custom("1px", theme.colors.primary[100])};
  padding: ${theme.spacing.double(10, 0)};
  h4 {
    width: 70%;
    margin: 0;

    font-family: ${theme.fontFamily.euclidMedium};
  }
  p {
    color: ;
    font-family: ${theme.fontFamily.euclidLight};
    margin: 0;
  }
`;

export const Table = styled.div`
  margin-top: ${theme.spacing.custom(30)};
  border-radius: ${theme.borderRadius.primary};
  width: 100%;
  overflow-x: scroll;
  table {
    width: 100%;
    thead {
      tr {
        background: ${theme.colors.primary[100]};
        th {
          background: ${theme.colors.primary[100]};
          padding: ${theme.spacing.normal};
          font-size: ${theme.fontSize.small};
          color: ${theme.colors.primary[400]};
          transition: background 0.3s ease;
          font-family: ${theme.fontFamily.euclidMedium};
          text-align: left;
        }
      }
    }
    tbody {
      background: #fff;
      tr {
        td {
          border-bottom: ${theme.border.table};
          background: ${theme.colors.white};
          padding: ${theme.spacing.normal};
          overflow-wrap: break-word;
          font-family: ${theme.fontFamily.euclidLight};
          a {
            text-decoration: none;
            color: ${theme.colors.primary[300]};
            font-family: ${theme.fontFamily.euclidMedium};
          }
        }
      }
    }
  }
  ${theme.media.sm(575)} {
    table {
      td {
        white-space: pre;
      }
      th {
        white-space: pre;
      }
    }
  }
`;

export const ChartCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.primary};
  padding: ${theme.spacing.double(20, 24)};
  height: auto;

  canvas {
    height: 430px !important;
    width: 80% !important;
  }
  ${theme.media.sm(575)} {
    margin-bottom: ${theme.spacing.custom(32)};
    canvas {
      height: 400px !important;
      width: 100% !important;
    }
  }
`;
export const DataCardHeading = styled.div`
  display: flex;
  justicy-content: space-between;
  h3 {
    font-size: ${theme.fontSize.heading};
    margin: 0;
  }
`;
