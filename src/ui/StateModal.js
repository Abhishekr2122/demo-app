import { createContext, useContext, useEffect, useState } from "react";
import Input from "./Input";
import { useStates } from "../hooks/useStates";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { ImCancelCircle } from "react-icons/im";

const StateModalContext = createContext();

export default function StateModal({ children, country, setState }) {
  const { isLoading, data } = useStates(country?.value);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(
    function () {
      if (country === null) {
        setValue("");
      }
    },
    [country, setValue]
  );

  return (
    <StateModalContext.Provider
      value={{
        value,
        isOpen,
        setValue,
        country,
        setIsOpen,
        data,
        isLoading,
        setState,
      }}
    >
      {children}
    </StateModalContext.Provider>
  );
}

export function useStateModalContext() {
  const result = useContext(StateModalContext);
  return result;
}

export function InputElement({ placeholder }) {
  const { value, country, setValue, setIsOpen } = useStateModalContext();

  return (
    <Input
      value={value}
      type="text"
      placeholder={placeholder}
      id="state"
      onFocus={function () {
        if (country !== null) {
          setIsOpen(true);
        }
        if (value) {
          setValue("");
        }
      }}
      onChange={function () {
        setValue("");
      }}
      autoComplete="new-text"
      required
    />
  );
}

const StyledDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 4px;

  height: 250px;
  width: 15%;
  overflow: scroll;
  scroll-behavior: smooth;
  background-color: #111827;
  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
`;

const StyledLi = styled.li`
  color: white;
  cursor: pointer;
  padding: 4px;
  border-bottom: 2px solid #18212f;
`;

export function StateOutputContainer() {
  const { isOpen, country, data, isLoading, setIsOpen, setValue, setState } =
    useStateModalContext();

  if (isOpen && country !== null && !isLoading) {
    return createPortal(
      <StyledDiv>
        <ImCancelCircle
          style={{
            color: "white",
            position: "absolute",
            left: "90%",
            top: "3%",
          }}
          onClick={function () {
            setIsOpen(false);
          }}
        />
        <ul>
          {data?.map(function (citem, i) {
            return (
              <StyledLi
                key={i}
                onClick={function () {
                  setValue(citem.name);
                  setIsOpen(false);
                  setState(citem.name);
                }}
              >
                {
                  <strong style={{ fontWeight: "lighter" }}>
                    {citem.name}
                  </strong>
                }
              </StyledLi>
            );
          })}
        </ul>
      </StyledDiv>,
      document.body
    );
  } else {
    return null;
  }
}
