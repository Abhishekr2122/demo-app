import { createContext, useContext, useState } from "react";
import UpdateUser from "../components/UpdateUser";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledUpdateContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 25%;
  border-radius: 4px;

  height: 80%;
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

export default function UpdateModal({ children, tableInputData, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserUpdateContext.Provider
      value={{
        isOpen,
        setIsOpen,
        currentUser,
        setCurrentUser,
        tableInputData,
        id,
      }}
    >
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
      <StyledOverlay>
        <StyledUpdateContainer>
          <UpdateUser />
        </StyledUpdateContainer>
      </StyledOverlay>,
      document.body
    );
  }

  if (isOpen === false) {
    return null;
  }
}
