import { TbUserEdit } from "react-icons/tb";
import { useUpdateUser } from "./UpdateModal";

export default function EditButton() {
  const { setIsOpen } = useUpdateUser();

  return (
    <button
      style={{
        backgroundColor: " #111827",
        border: "var(--color-brand-600)",
      }}
      onClick={function () {
        setIsOpen(function (crrvalue) {
          return !crrvalue;
        });
      }}
    >
      <TbUserEdit style={{ color: "var(--color-brand-600)" }} />
    </button>
  );
}
