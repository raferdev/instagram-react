import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import MobLogo from "../mobile/MobLogo";
import MobImg from "../mobile/MobImg";
import MobIcon from "../mobile/MobIcon";
export default function Header() {
  return (
    <nav class="container">
      <Logo />
      <MobLogo />
      <MobImg />
      <Search />
      <UserMenu />
      <MobIcon />
    </nav>
  );
}
