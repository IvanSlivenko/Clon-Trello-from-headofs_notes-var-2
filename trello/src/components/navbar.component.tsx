import Link from "next/link";
import { UserDropDown } from "./user-dropdown.component";
import { MenuNav } from "./menu-nav.component";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800 mb-10">
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        // style={{ backgroundColor: "green"}}
      >
        <Logo />
        <UserDropDown />
        {/* <MenuNav /> */}
      </div>
    </nav>
  );
}
