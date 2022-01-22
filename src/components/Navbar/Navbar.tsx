import { FC } from "react";
import { Button, Tooltip } from "antd";
import { NavbarWrapper } from "./style";

const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <span>Attendant</span>
      <span>Welcome Robert!</span>
      <div>
        <Tooltip title="Sign Out" placement="bottom">
          <Button type="primary">Log Out</Button>
        </Tooltip>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
