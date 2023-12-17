import styled from "styled-components";
import { TbUserEdit } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";

const StyledInputRow = styled.tr`
  height: 46px;
  width: 100px;
`;

const StyledRowData = styled.td`
  text-align: center;
  overflow: scroll;
  max-width: 100px;
  color: white;
  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
`;

export default function TableRow({ data }) {
  console.log("This the data object", data);
  return (
    <StyledInputRow>
      <StyledRowData>{data.firstName}</StyledRowData>
      <StyledRowData>{data.lastName}</StyledRowData>
      <StyledRowData>{data.email}</StyledRowData>
      <StyledRowData>{data.phoneNumber}</StyledRowData>
      <StyledRowData>{data.country}</StyledRowData>
      <StyledRowData>{data.state}</StyledRowData>
      <StyledRowData>{data.address1}</StyledRowData>
      <StyledRowData>{data.address2 ? data.address2 : "-"}</StyledRowData>
      <StyledRowData>{data.zipcode}</StyledRowData>
      <StyledRowData>
        <div
          style={{ display: "flex", gap: "0.7rem", justifyContent: "center" }}
        >
          <button style={{ backgroundColor: " #111827", border: "none" }}>
            <TbUserEdit style={{ color: "blue" }} />
          </button>
          <button style={{ backgroundColor: " #111827", border: "none" }}>
            <MdOutlineDelete style={{ color: "blue" }} />
          </button>
        </div>
      </StyledRowData>
    </StyledInputRow>
  );
}
