import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { FaPlateWheat } from "react-icons/fa6";
import { GiMeat } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import { BiSolidDrink } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const router = useRouter();

  const MenuClick = () => {
    setActiveMenu(!activeMenu);
  };
  const ClickLinkHome = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push("/");
  };
  const ClickLinkDish = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push("/moduledishs/dishs");
  };
  return (
    <>
      <header className="head-admin">
        <nav className={`menu-bar ${activeMenu ? "active" : ""}`}>
          <h1 className="name-title">Restaurante Mi Choza</h1>
          <div className="hamb-menu" onClick={MenuClick}>
            {activeMenu ? (
              <RiCloseLine className="close-icon" />
            ) : (
              <RiMenuFill className="menu-icon" />
            )}
          </div>
          <ul className={`inic-list ${activeMenu ? "active" : ""}`}>
            <li>
              <Link className="link-a" href="/" onClick={ClickLinkHome}>
                <FaHome className="icon-home" />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="link-a"
                href="/moduledishs/dishs"
                onClick={ClickLinkDish}
              >
                <FaPlateWheat className="icon-home" />
                Platos
              </Link>
            </li>
            <li>
              <button className="link-b">
                <GiMeat className="icon-register" />
                Cortes
              </button>
            </li>
            <li>
              <Link className="linkS" href="/">
                <PiBowlFoodFill className="icon-exit" />
                Pastas
              </Link>
            </li>
            <li>
              <Link className="linkS" href="/">
                <IoFastFood className="icon-exit" />
                Burguers
              </Link>
            </li>
            <li>
              <Link className="linkS" href="/">
                <BiSolidDrink className="icon-exit" />
                Bebidas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
