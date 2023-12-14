import { createContext, useContext, useState } from "react";
import Input from "./Input";
import { useStates } from "../hooks/useStates";

const StateModalContext = createContext();

export default function StateModal({ children, country }) {
  const { isLoading, data } = useStates(country?.value);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  return (
    <StateModalContext.Provider value={{ value, isOpen, setValue, country }}>
      {children}
    </StateModalContext.Provider>
  );
}

export function useStateModalContext() {
  const result = useContext(StateModalContext);
  return result;
}

export function InputElement({ placeholder }) {
  const { value, country, setValue } = useStateModalContext();

  return (
    <Input
      value={value}
      type="text"
      placeholder={placeholder}
      onFocus={function () {
        if (country !== null) {
          console.log("state input element is focused");
        }
      }}
      onChange={function () {
        setValue("hello");
      }}
      autoComplete="new-text"
    />
  );
}

export function StateOutputContainer() {
  return <p>This is the state data</p>;
}
