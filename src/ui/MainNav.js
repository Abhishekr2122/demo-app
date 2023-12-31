import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PiUsersThreeThin } from "react-icons/pi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { TbUsersPlus } from "react-icons/tb";
import { useEffect } from "react";
import { getCountries } from "../getCountries";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: white;
    background-color: #111827;
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: white;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/users">
            <PiUsersThreeThin />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/createusers">
            <TbUsersPlus />
            <span>Create users</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
