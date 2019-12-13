import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  width: 100%;
  max-width: 1625px;
  padding: 16px 0;
  background-color: grey;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Link = styled(NavLink)`
  padding: 8px;
  font-weight: 500;
  background-color: lightblue;
  font-size: 150%;
  margin-right: 16px;
  border-radius: 8px;
`;

export const Logout = styled.button`
  padding: 8px;
  font-weight: 500;
  background-color: lightblue;
  font-size: 150%;
  width: fit-content;
  margin-right: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2),
    2px 4px 3px 3px rgba(0, 0, 0, 0.2);
`;
