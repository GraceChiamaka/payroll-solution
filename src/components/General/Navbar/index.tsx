import { NavContainer, Notification, Avatar } from "./style";
import Bell from "../../../assets/images/svg/bell.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <Notification>
        <img src={Bell} alt="" />
      </Notification>
      <Avatar></Avatar>
    </NavContainer>
  );
};

export default Navbar;
