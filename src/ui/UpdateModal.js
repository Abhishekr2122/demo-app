import { createContext, useContext, useState } from "react";
import UpdateUser from "../components/UpdateUser";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledUpdateContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 4px;

  height: 250px;
  width: 60%;
  overflow: scroll;
  scroll-behavior: smooth;
  background-color: #111827;
  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
`;

const UserUpdateContext = createContext();

export default function UpdateModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UserUpdateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </UserUpdateContext.Provider>
  );
}

export function useUpdateUser() {
  const data = useContext(UserUpdateContext);
  return data;
}

export function UpdateContainer() {
  const { isOpen } = useUpdateUser();
  if (isOpen) {
    return createPortal(
      <StyledUpdateContainer>
        <UpdateUser />
      </StyledUpdateContainer>,
      document.body
    );
  }

  if (isOpen === false) {
    return null;
  }
}
