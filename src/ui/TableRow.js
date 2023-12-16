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

export default function TableRow() {
  return (
    <StyledInputRow>
      <StyledRowData>Abhishek</StyledRowData>
      <StyledRowData>Shinde</StyledRowData>
      <StyledRowData>abhishekrshinde21@gmail.com</StyledRowData>
      <StyledRowData>7720960310</StyledRowData>
      <StyledRowData>Spectrum Nivas gurudwara colony akurdi pune</StyledRowData>
      <StyledRowData>Akurdi</StyledRowData>
      <StyledRowData>India</StyledRowData>
      <StyledRowData>Maharashtra</StyledRowData>
      <StyledRowData>431605</StyledRowData>
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
