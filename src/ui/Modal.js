import { createContext, useContext, useEffect, useState } from "react";
import Input from "./Input";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import { useCountries } from "../hooks/useCountries";

const ModalContext = createContext();

export default function Modal({ children, setCountry, country }) {
  const { isLoading, data: remoteData } = useCountries();

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const [outputData, setOutputData] = useState([]);

  useEffect(
    function () {
      if (isOpen && value.length > 0) {
        setOutputData(function () {
          return remoteData.filter(function (citem) {
            return citem.value.toLowerCase().includes(value.toLowerCase());
          });
        });
      }
    },
    [isOpen, value, remoteData, setOutputData]
  );

  useEffect(function () {
    setOutputData(remoteData);
  }, []);

  useEffect(
    function () {
      if (country === null) {
        setValue("");
      }
    },
    [country, setValue]
  );

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        value,
        setValue,
        outputData,
        setOutputData,
        remoteData,
        isLoading,
        setCountry,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const data = useContext(ModalContext);
  return data;
}

export function InputElem({ type, placeholder }) {
  const { setIsOpen, value, setValue, setCountry } = useModalContext();

  return (
    <Input
      value={value}
      type="text"
      id="country"
      placeholder={placeholder}
      onFocus={function (e) {
        if (type === "country") {
          if (value) {
            setValue("");
            setCountry(null);
          }
          setIsOpen(true);
        }
      }}
      onChange={function (e) {
        setValue(e.target.value);
      }}
      autoComplete="new-search"
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
export function OutPutContainer() {
  const {
    isOpen,
    setValue,
    setIsOpen,
    outputData,
    isLoading,
    remoteData,
    value,
    setCountry,
  } = useModalContext();

  if (isOpen && !isLoading) {
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
          {(isOpen ? (value.length > 0 ? outputData : remoteData) : [])?.map(
            function (citem, i) {
              return (
                <StyledLi
                  key={i}
                  onClick={function () {
                    setValue(citem.value);
                    setCountry(citem);
                    setIsOpen(false);
                  }}
                >
                  {
                    <strong style={{ fontWeight: "lighter" }}>
                      {citem.value}
                    </strong>
                  }
                </StyledLi>
              );
            }
          )}
        </ul>
      </StyledDiv>,
      document.body
    );
  } else {
    return null;
  }
}
