import styled from "styled-components";

const StyledInputRow = styled.tr`
  height: 46px;
  width: 100px;
`;

const StyledRowData = styled.td`
  text-align: center;
  overflow: scroll;
  max-width: 150px;

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
    </StyledInputRow>
  );
}
