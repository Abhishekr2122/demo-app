import styled from "styled-components";
import TableRow from "../ui/TableRow";
import { useEffect, useState } from "react";

const StyledTable = styled.table`
  border: 1px solid white;
  width: 98.5%;
  border-radius: 2px;
  margin-left: 10px;
  padding: 2px;
`;

const StyledTableBody = styled.tbody`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
`;

const StyledRow = styled.tr`
  height: 46px;
  width: 100px;
`;

const StyledHead = styled.th`
  color: lightslategrey;
  font-weight: 600;
`;

export default function Users() {
  const [dataLoading, setDataLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(function () {
    const users = JSON.parse(localStorage.getItem("users"));
    console.log("This is the user data ", users);
    setTableData(users);
    setDataLoading(false);
  }, []);

  if (dataLoading) {
    return <p style={{ color: "White" }}>Loading Data...</p>;
  }

  if (tableData?.length === 0) {
    return <p>No user data to show. Kindly create users first</p>;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <StyledTable>
        <StyledTableBody>
          <StyledRow>
            <StyledHead>Firstname</StyledHead>
            <StyledHead>Lastname</StyledHead>
            <StyledHead>Email</StyledHead>
            <StyledHead>Phonenumber</StyledHead>
            <StyledHead>Country</StyledHead>
            <StyledHead>State</StyledHead>
            <StyledHead>Address1</StyledHead>
            <StyledHead>Address2</StyledHead>
            <StyledHead>Zipcode</StyledHead>
            <StyledHead>Actions</StyledHead>
          </StyledRow>

          {tableData?.map(function (citem, i) {
            return (
              <TableRow
                data={citem}
                key={i}
                id={i}
                tableInputData={tableData}
                updateTableData={setTableData}
              />
            );
          })}
        </StyledTableBody>
      </StyledTable>
    </div>
  );
}
