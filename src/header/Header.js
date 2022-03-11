import Logo from "./Logo"
import Search from "./Search";
import UserMenu from "./UserMenu";
export default function Header() {
    return (
    <header>
        <Logo />
        <Search />
        <UserMenu />
    </header>
    );
}