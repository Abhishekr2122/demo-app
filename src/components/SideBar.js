import styled from "styled-components";
import MainNav from "../ui/MainNav";

const StyledSidebar = styled.aside`
  /* background-color: var(--color-grey-0); */
  padding: 3.2rem;
  border-right: 1px solid #18212f;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background-color: #111827;
`;

export default function SideBar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}
