import styled from "styled-components";
import NavBar from "../components/NavBar";

const StyledHeader = styled.header`
  background-color: #18212f;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid #18212f;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
}
