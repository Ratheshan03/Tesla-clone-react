import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const links = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img
          className="tesla-logo"
          src="/images/logo.svg"
          alt="Tesla-logo-text"
        />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={links}>
              {car}
            </a>
          ))}
        <a href="https://www.tesla.com/solarroof">Solar Roof</a>
        <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="https://shop.tesla.com/us/en.html?tesref=true">Shop</a>
        <a href="https://www.tesla.com/teslaaccount"> Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="https://www.tesla.com/inventory/used/ms">
            {" "}
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/inventory/used/ms"> Used Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/tradein">Trade-in</a>
        </li>
        <li>
          <a href="https://www.tesla.com/cybertruck">Cybertruck</a>
        </li>
        <li>
          <a href="https://www.tesla.com/roadster">Roadster</a>
        </li>
        <li>
          <a href="https://www.tesla.com/semi">Semi</a>
        </li>
        <li>
          <a href="https://www.tesla.com/powerwall">Powerwall</a>
        </li>
        <li>
          <a href="https://www.tesla.com/commercial">Commercial Solar</a>
        </li>
        <li>
          <a href="https://www.tesla.com/drive">Test Drive</a>
        </li>
        <li>
          <a href="https://www.tesla.com/charging">Charging</a>
        </li>
        <li>
          <a href="https://www.tesla.com/findus">Find Us</a>
        </li>
        <li>
          <a href="https://www.tesla.com/support">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  img {
    height: 22px;
    width: 145px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: nowrap;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 18px;
    font-size: 17px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  height: 30px !important;
  width: 30px !important;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
