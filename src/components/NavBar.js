import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";
import ButtonIcon from "../ui/ButtonIcon";
import Logo from "../ui/Logo";
import { IoCreate } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 1.5rem;
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
        <ButtonIcon style={{ border: "2px solid black" }}>
          <NavLink to={"/users"}>
            <HiOutlineUser />
          </NavLink>
        </ButtonIcon>
      </li>

      <li>
        <ButtonIcon style={{ border: "2px solid black" }}>
          <NavLink to={"/createusers"}>
            <IoCreate />
          </NavLink>
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}
