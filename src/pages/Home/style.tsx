import styled from "styled-components";
import theme from "../../theme";

export const Heading = styled.div`
  h3 {
    font-size: ${theme.fontSize.custom(3)};
    font-family: ${theme.fontFamily.almarenaDisplayRegular};
    margin: 0;
    margin-bottom: ${theme.spacing.custom(24)};
    color: #55596a;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Col = styled.div`
  width: 30%;
`;
export const ColX = styled.div`
  width: 40%;
`;
export const Col6 = styled.div`
  width: 60%;
  margin: auto;
`;
export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.primary};
  padding: ${theme.spacing.double(20, 24)};
  height: ${theme.spacing.custom(80)};
  h3 {
    color: ${theme.colors.black[300]};
    margin-bottom: ${theme.spacing.custom(12)};
    font-family: ${theme.fontFamily.almarenaDisplayRegular};
  }
  p {
    font-size: ${theme.fontSize.custom(2.7)};
    font-family: ${theme.fontFamily.euclidRegular};
  }
`;
export const TableContainer = styled.div`
  width: 100%;
  margin-top: ${theme.spacing.custom(30)};
  border-radius: ${theme.borderRadius.primary};

  table {
    width: 100%;
    thead {
      tr {
        th {
          color: #000000;
          font-weight: 500;
          text-align: left;
          background: #fafafa;
          padding: 16px;
          border-bottom: 1px solid #f0f0f0;
          transition: background 0.3s ease;
          font-family: ${theme.fontFamily.euclidSemiBold};
        }
      }
    }
    tbody {
      background: #fff;
      tr {
        td {
          border-bottom: 1px solid #f0f0f0;
          background: #ffff;
          padding: 16px;
          overflow-wrap: break-word;
          font-family: ${theme.fontFamily.euclidLight};
        }
      }
    }
  }
`;
export const ChartCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.primary};
  padding: ${theme.spacing.double(20, 24)};
  height: auto;
  margin-top: 48px;
  canvas {
    height: 100% !important;
    width: 100% !important;
  }
`;
