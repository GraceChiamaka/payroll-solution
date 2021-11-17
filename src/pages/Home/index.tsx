import Layout from "../../components/Layouts";
import {
  Heading,
  Row,
  Col,
  Card,
  ColX,
  TableContainer,
  ChartCard,
  Col6,
} from "./style";
import payrollData from "./data.json";
import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import theme from "theme";

const HomePage = () => {
  const [totalBonus, setTotalBonus] = useState(0);
  const [totalPension, setTotalPension] = useState(0);
  const [totalPayroll, setTotalPayroll] = useState(0);
  const [chartData, setChartData] = useState<number[]>([]);

  let pension = 0;
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
    getPaidBonues();
    getPaidPension();
    getTotalPayroll();
    getChartData();
  }, []);

  const getPaidBonues = () => {
    let total = 0;
    payrollData.forEach((item) => (total += item["Bonus"]));
    setTotalBonus(total);
  };
  const getPaidPension = () => {
    let total = 0;
    payrollData.forEach((item) => (total += item["Employee Pension"]));
    setTotalPension(total);
  };
  const getTotalPayroll = () => {
    let paidTotal = 0;

    payrollData.forEach((item) => (paidTotal += item["Net Pay"]));
    setTotalPayroll(paidTotal);
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
      <Row>
        <ColX>
          <Card>
            <h3>Total Payroll</h3>
            <p>${totalPayroll}</p>
          </Card>
        </ColX>
        <Col>
          <Card>
            <h3>Total Bonus </h3>
            <p>${totalBonus}</p>
          </Card>
        </Col>
        <Col>
          <Card>
            <h3>Total Pension</h3>
            <p>${totalPension}</p>
          </Card>
        </Col>
      </Row>

      <ChartCard>
        <Row>
          <Col6>
            <Doughnut
              ref={ref}
              data={data}
              height="300"
              width="100"
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Payroll Summary ($)",
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
          </Col6>
        </Row>
      </ChartCard>

      <Row>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Departments</th>
                <th>Hours Worked</th>
                <th>Pay Date</th>
                <th>Currency</th>
                <th></th>
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
                    <Link to={`/staff/${item["Employee ID"]}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Row>
    </Layout>
  );
};
export default HomePage;
