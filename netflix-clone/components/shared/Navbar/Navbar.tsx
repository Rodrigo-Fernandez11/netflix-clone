import { NavbarDesktop } from "./NavbarDesktop/NavbarDesktop";
import { NavbarMovil } from "./NavbarMovil";


export function Navbar () {
    return (
        <nav>
            <div className="hidden mx-auto md:block">
              <NavbarDesktop />  
            </div>
            <div className="md:hidden">
                <NavbarMovil />
            </div>
        </nav>
    )
}