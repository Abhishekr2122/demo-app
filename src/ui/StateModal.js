import { createContext, useContext, useState } from "react";
import Input from "./Input";

const StateModalContext = createContext();

export default function StateModal({ children, country, type, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  return (
    <StateModalContext.Provider value={{ value, placeholder }}>
      {children}
    </StateModalContext.Provider>
  );
}

export function useStateModalContext() {
  const result = useContext(StateModalContext);
  return result;
}
export function InputElement() {
  const { value, placeholder } = useStateModalContext();

  return <Input value={value} type="text" placeholder={placeholder} />;
}
