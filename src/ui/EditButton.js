import { TbUserEdit } from "react-icons/tb";
import { useUpdateUser } from "./UpdateModal";

export default function EditButton() {
  const { setIsOpen, setCurrentUser, id, tableInputData } = useUpdateUser();

  function handleEditUser() {
    const currentUser = tableInputData.filter(function (citem, i) {
      return id === i;
    });
    setIsOpen(true);
    setCurrentUser(currentUser[0]);
  }

  return (
    <button
      style={{
        backgroundColor: " #111827",
        border: "var(--color-brand-600)",
      }}
      onClick={handleEditUser}
    >
      <TbUserEdit style={{ color: "var(--color-brand-600)" }} />
    </button>
  );
}
