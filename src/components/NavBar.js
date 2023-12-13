import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";
import ButtonIcon from "../ui/ButtonIcon";
import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export default function NavBar() {
  return (
    <StyledHeaderMenu>
      <li>
        <Logo
          source={"/orsrc43354.jpeg"}
          style={{ height: "4rem", width: "4rem", borderRadius: "25rem" }}
        />
      </li>

      <li>
        <ButtonIcon>
          <NavLink to={"/users"}>
            <HiOutlineUser />
          </NavLink>
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}
