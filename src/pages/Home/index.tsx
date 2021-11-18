import Layout from "../../components/Layouts";
import {
  Heading,
  Card,
  Table,
  ChartCard,
  BonusCard,
  Row,
  ColX,
  Col2,
  Col7,
  Col12,
  TableRow,
  DataCardHeading,
  Bonus,
  ChartContainer,
} from "./style";
import payrollData from "../../utils/data.json";
import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import theme from "theme";

const HomePage = () => {
  const [totalBonus, setTotalBonus] = useState(0);
  const [totalPension, setTotalPension] = useState(0);
  const [totalPayroll, setTotalPayroll] = useState(0);
  const [chartData, setChartData] = useState<number[]>([]);
  const [employeeCount, setEmployeeCount] = useState(0);

  const data = {
    labels: [
      "Base Salary",
      "Student Loan Repayments",
      "Income Tax",
      "Net Pay",
      "Employee Pension",
    ],

    datasets: [
      {
        data: chartData,

        backgroundColor: [
          "#1c228f",
          "#55596a",
          "#6469a8",
          "#b98c40",
          "#222833",
          "#f2f3f6",
        ],
        borderColor: [
          "#1c228f",
          "#55596a",
          "#6469a8",
          "#b98c40",
          "#222833",
          "#f2f3f6",
        ],
        borderWidth: 1,
      },
    ],
  };
  let ref = useRef();

  useEffect(() => {
    getInitialData();

    // eslint-disable-next-line
  }, []);

  const getInitialData = () => {
    getPaidBonues();
    getChartData();
  };

  const getPaidBonues = () => {
    let totalNetPay = 0;
    let totalPaidPension = 0;
    let totalPaidBonus = 0;

    payrollData.forEach((item) => {
      totalNetPay += item["Net Pay"];
      totalPaidPension += item["Employee Pension"];
      totalPaidBonus += item["Bonus"];
    });
    setEmployeeCount(payrollData.length);
    setTotalBonus(totalPaidBonus);
    setTotalPension(totalPaidPension);
    setTotalPayroll(totalNetPay);
  };

  const getChartData = () => {
    let basePay = 0;
    let loanPay = 0;
    let tax = 0;
    let netPay = 0;
    let pension = 0;
    let dataArr = [];

    payrollData.forEach((item) => {
      netPay += item["Net Pay"];
      basePay += item["Base Salary"];
      loanPay += item["Student Loan Repayment"];
      tax += item["Income Tax"];
      pension += item["Employee Pension"];
    });
    dataArr.push(basePay, loanPay, tax, netPay, pension);
    setChartData([...dataArr]);
  };

  return (
    <Layout>
      <Heading>
        <h3>Welcome,</h3>
      </Heading>
      <Row justify="space-between">
        <Col2>
          <Card>
            <h3>Total Payroll</h3>
            <p>£{totalPayroll}</p>
          </Card>
        </Col2>
        <Col2>
          <Card>
            <h3>Total Bonus </h3>
            <p>£{totalBonus}</p>
          </Card>
        </Col2>
        <Col2>
          <Card>
            <h3>Total Pension</h3>
            <p>£{totalPension}</p>
          </Card>
        </Col2>
        <Col2>
          <Card>
            <h3>Total Employes</h3>
            <p>{employeeCount}</p>
          </Card>
        </Col2>
      </Row>

      <ChartContainer>
        <Row justify="space-between">
          <Col7>
            <ChartCard>
              <DataCardHeading>
                <h3>Payroll Summary</h3>
              </DataCardHeading>

              <Doughnut
                ref={ref}
                data={data}
                height="300"
                width="100"
                options={{
                  plugins: {
                    title: {
                      display: true,
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                      labels: {
                        font: {
                          size: 14,
                          family: theme.fontFamily.euclidRegular,
                        },
                        color: theme.colors.black[100],
                      },
                    },
                  },
                }}
              />
            </ChartCard>
          </Col7>
          <ColX>
            <BonusCard>
              <h3>Employee Bonus</h3>
              {payrollData.map((item) => (
                <Bonus>
                  <h4>{item["Employee Name"]}</h4>
                  <p>£{item["Bonus"]}</p>
                </Bonus>
              ))}
            </BonusCard>
            <BonusCard>
              <h3>Working Hours </h3>
              {payrollData.map((item) => (
                <Bonus>
                  <h4>{item["Employee Name"]}</h4>
                  <p>{item["Hours Worked"]} h</p>
                </Bonus>
              ))}
            </BonusCard>
          </ColX>
        </Row>
      </ChartContainer>

      <TableRow>
        <Col12>
          <ChartCard>
            <DataCardHeading>
              <h3>Employee Summary</h3>
            </DataCardHeading>
            <Table>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Departments</th>
                    <th>Hours Worked</th>
                    <th>Pay Date</th>
                    <th>Currency</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payrollData.map((item) => (
                    <tr>
                      <td>{item["Employee ID"]}</td>
                      <td>{item["Employee Name"]}</td>
                      <td>{item["Departments"]}</td>
                      <td>{item["Hours Worked"]}</td>
                      <td>{item["Pay Date"]}</td>
                      <td>{item["currency"]}</td>
                      <td>
                        <Link to={`/staff/${item["Employee ID"]}`}>
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Table>
          </ChartCard>
        </Col12>
      </TableRow>
    </Layout>
  );
};
export default HomePage;
