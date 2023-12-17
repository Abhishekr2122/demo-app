import styled from "styled-components";
import { TbUserEdit } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";
import toast from "react-hot-toast";
import UpdateModal, { UpdateContainer, useUpdateUser } from "./UpdateModal";
import EditButton from "./EditButton";

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

export default function TableRow({
  data,
  id,
  tableInputData,
  updateTableData,
}) {
  console.log("This is the table input data", tableInputData);
  function handleUserDelete() {
    const filteredArr = tableInputData.filter(function (citem, i) {
      return id !== i;
    });
    localStorage.setItem("users", JSON.stringify(filteredArr));
    updateTableData(filteredArr);
    toast.success("User successfully deleted");
  }
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
          <UpdateModal>
            <EditButton />
            <UpdateContainer />
          </UpdateModal>
          <button
            style={{
              backgroundColor: " #111827",
              border: "var(--color-brand-600)",
            }}
            onClick={function () {
              handleUserDelete();
            }}
          >
            <MdOutlineDelete style={{ color: "var(--color-brand-600)" }} />
          </button>
        </div>
      </StyledRowData>
    </StyledInputRow>
  );
}
