import Layout from "../../components/Layouts";
import {
  PageWrapper,
  Heading,
  DataRow,
  Title,
  Text,
  InfoCard,
  DeductText,
  TotalText,
  DeductTitle,
  TotalTitle,
} from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/currencyFormatter";
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

    return (
      <div>
        <Heading>
          {staffData["Employee Name"]} 😎
          <DataRow>
            <Title> Employee ID </Title>
            <Text>{staffData["Employee ID"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Payroll Period </Title>
            <Text>{staffData["Payroll Period"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Departments </Title>
            <Text>{staffData["Departments"]}</Text>
          </DataRow>
        </Heading>

        <InfoCard>
          <h3>Payroll Information</h3>
          <DataRow>
            <Title> Currency</Title>
            <Text>{staffData["currency"]}</Text>
          </DataRow>
          <DataRow>
            <Title> Base Salary </Title>
            <Text>{formatCurrency(staffData["Base Salary"])}</Text>
          </DataRow>
          <DataRow>
            <Title> Bonus </Title>
            <Text>{formatCurrency(staffData["Bonus"])}</Text>
          </DataRow>{" "}
          <DataRow>
            <TotalTitle> Gross Salary </TotalTitle>
            <TotalText>
              {formatCurrency(
                staffData["Base Salary"] +
                  staffData["Bonus"] +
                  staffData["Student Loan Repayment"]
              )}
            </TotalText>
          </DataRow>
          <DataRow>
            <DeductTitle> Employees Pension</DeductTitle>
            <DeductText>
              {formatCurrency(staffData["Employee Pension"])}
            </DeductText>
          </DataRow>
          <DataRow>
            <DeductTitle> Income Tax</DeductTitle>
            <DeductText>{formatCurrency(staffData["Income Tax"])}</DeductText>
          </DataRow>
          <DataRow>
            <TotalTitle> Net Pay </TotalTitle>
            <TotalText>{formatCurrency(staffData["Net Pay"])}</TotalText>
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
