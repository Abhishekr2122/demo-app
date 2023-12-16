import styled from "styled-components";
import TableRow from "../ui/TableRow";

const StyledTable = styled.table`
  border: 1px solid #c6b3b3;
  width: 98.5%;
  border-radius: 2px;
  margin-left: 10px;
  padding: 2px;
`;

const StyledTableBody = styled.tbody``;

const StyledRow = styled.tr`
  height: 46px;
  width: 100px;
`;

const StyledHead = styled.th`
  color: lightslategrey;
  font-weight: 600;
`;

export default function Users() {
  return (
    <div style={{ marginTop: "10px" }}>
      <StyledTable>
        <StyledTableBody>
          <StyledRow>
            <StyledHead>Firstname</StyledHead>
            <StyledHead>Lastname</StyledHead>
            <StyledHead>Email</StyledHead>
            <StyledHead>Phonenumber</StyledHead>
            <StyledHead>Address1</StyledHead>
            <StyledHead>Address2</StyledHead>
            <StyledHead>Country</StyledHead>
            <StyledHead>State</StyledHead>
            <StyledHead>Zipcode</StyledHead>
            <StyledHead>Actions</StyledHead>
          </StyledRow>
          <TableRow />
        </StyledTableBody>
      </StyledTable>
    </div>
  );
}
