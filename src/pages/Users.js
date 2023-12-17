import styled from "styled-components";
import TableRow from "../ui/TableRow";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TbUserShare } from "react-icons/tb";

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
    return (
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            border: "1px solid #18212f",
            fontSize: "35px",
            padding: "8px",
            borderRadius: "4px",
            color: "white",
            backgroundColor: "#18212f",
          }}
        >
          Loading Data...
        </p>
        ;
      </div>
    );
  }

  if (tableData?.length === 0) {
    return (
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            border: "1px solid #18212f",
            fontSize: "35px",
            padding: "8px",
            borderRadius: "4px",
            color: "white",
            backgroundColor: "#18212f",
          }}
        >
          No user data to show kindly create users{" "}
          <span>
            <NavLink
              to="/createusers"
              style={{
                border: "1px solid var(--color-brand-600) ",
                borderRadius: "6px",
              }}
            >
              <TbUserShare
                style={{ paddingTop: "9px", color: "var(--color-brand-600)" }}
              />
            </NavLink>
          </span>
        </p>
      </div>
    );
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
