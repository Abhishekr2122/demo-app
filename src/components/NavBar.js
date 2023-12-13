import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";
import ButtonIcon from "../ui/ButtonIcon";
import Logo from "../ui/Logo";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export default function NavBar() {
  return (
    <StyledHeaderMenu>
      <li>
        <Logo />
      </li>
      <li>
        <span style={{ color: "white" }}>Demo</span>
      </li>
      <li>
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}
