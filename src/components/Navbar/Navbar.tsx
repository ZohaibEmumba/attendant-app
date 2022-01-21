import { FC } from "react";
import { Button } from "antd";
import { NavbarWrapper } from "./style";

const Navbar:FC = () => {
  return (
    <NavbarWrapper>
      <span>Attendant</span>
      <span>Welcome Robert!</span>
      <div>
        <Button type="primary">Log Out</Button>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
