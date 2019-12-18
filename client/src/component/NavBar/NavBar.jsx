import React, { useState } from "react";
import { useSelector } from "react-redux";
import { theStore } from "../../index";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Icon,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd,
  Field,
  Control,
  Button
} from "bloomer";

import ColorTheme from '../Styles/Colors'

const NavBarBloomer = () => {
  const user = useSelector(state => state.user);

  const handleLogout = async e => {
    // await Axios.post(`${endpoint}/logout`);
    theStore.dispatch({
      type: "user logged out"
    });
    window.location.replace("/");
  };

  const onClickNav = () => setIsActive(!isActive);
  const [isActive, setIsActive] = useState(false);
  const { background } = ColorTheme.elements;

  return (
    <Navbar style={{ borderBottom: "solid 1px black", margin: "0", backgroundColor: `${background}`}}>
      <NavbarBrand>
        <NavbarItem>
        </NavbarItem>
        <NavbarItem isHidden="desktop">
          <Icon className="fa fa-github" />
        </NavbarItem>
        <NavbarItem isHidden="desktop">
          <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
        </NavbarItem>
        <NavbarBurger
          isActive={isActive}
          onClick={onClickNav}
        />
      </NavbarBrand>
      <NavbarMenu isActive={isActive} onClick={onClickNav}>
        <NavbarStart>
          <NavbarItem href="#/">Home</NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink href="#/documentation">Documentation</NavbarLink>
            <NavbarDropdown>
              <NavbarItem href="#/">One A</NavbarItem>
              <NavbarItem href="#/">Two B</NavbarItem>
              <NavbarDivider />
              <NavbarItem href="#/">Two A</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem
            href="https://github.com/AlgusDark/bloomer"
            isHidden="touch"
          >
            <Icon className="fa fa-github" />
          </NavbarItem>
          <NavbarItem href="https://twitter.com/AlgusDark" isHidden="touch">
            <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
          </NavbarItem>
          <NavbarItem>
            <Field isGrouped>
              <Control>
                <Button
                  id="twitter"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://bloomer.js.org"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark"
                >
                  <Icon className="fa fa-twitter" />
                  <span>Tweet</span>
                </Button>
              </Control>
            </Field>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarBloomer;
