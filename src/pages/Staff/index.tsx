import Layout from "../../components/Layouts";
import { PageWrapper, Heading, DataRow, Title, Text, InfoCard } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import payrollData from "../../utils/data.json";

interface StaffProps {
  "Employee ID": string;
  "Payroll Period": string;
  "Pay Date": string;
  "Employee Name": string;
  Departments: string;
  currency: string;
  "Hours Worked": number;
  "Base Salary": number;
  Bonus: number;
  "Student Loan Repayment": number;
  "Income Tax": number;
  "Employee Pension": number;
  "Employer Pension": number;
  "Net Pay": number;
}

const Staff = () => {
  const { id: staffId } = useParams() as {
    id: string;
  };
  const [staffData, setStaffData] = useState<StaffProps | null>(null);

  useEffect(() => {
    getUserData();

    // eslint-disable-next-line
  }, []);

  console.log(staffData);

  const getUserData = () => {
    const userData: StaffProps[] = payrollData.filter(
      (data: StaffProps) => data["Employee ID"] === staffId
    );
    if (userData && userData.length) {
      setStaffData({ ...userData[0] });
    }
  };

  const displayData = () => {
    if (staffData === null) {
      return <p>Loading...</p>;
    }
    console.log(staffData["Employee Name"]);
    return (
      <div>
        <Heading>
          {staffData["Employee Name"]} 😎
          <DataRow>
            <Title> Employee ID </Title>
            <Text>{staffData["Employee ID"]}</Text>
          </DataRow>
        </Heading>
        <InfoCard>
          <h3>Employee Details</h3>
          <DataRow>
            <Title> Payroll Period </Title>
            <Text>{staffData["Payroll Period"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Pay Date </Title>
            <Text>{staffData["Pay Date"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Departments </Title>
            <Text>{staffData["Departments"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Hours Worked </Title>
            <Text>{staffData["Hours Worked"]}</Text>
          </DataRow>
        </InfoCard>
        <InfoCard>
          <h3>Payment Information</h3>
          <DataRow>
            <Title> currency</Title>
            <Text>{staffData["currency"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Base Salary </Title>
            <Text>{staffData["Base Salary"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Bonus </Title>
            <Text>{staffData["Bonus"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Student Loan Repayment </Title>
            <Text>{staffData["Student Loan Repayment"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Net Pay </Title>
            <Text>{staffData["Net Pay"]}</Text>
          </DataRow>
        </InfoCard>

        <InfoCard>
          <h3>Deductibles</h3>
          <DataRow>
            <Title> Income Tax </Title>
            <Text>{staffData["Income Tax"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Employee Pension </Title>
            <Text>{staffData["Employee Pension"]}</Text>
          </DataRow>

          <DataRow>
            <Title> Employer Pension </Title>
            <Text>{staffData["Employer Pension"]}</Text>
          </DataRow>
        </InfoCard>
      </div>
    );
  };

  return (
    <Layout>
      <PageWrapper> {displayData()}</PageWrapper>
    </Layout>
  );
};
export default Staff;
