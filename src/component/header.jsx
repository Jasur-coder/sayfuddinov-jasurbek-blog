import { Link, NavLink } from "react-router-dom";
import { headerLinks } from "../data";

const Header = () => {
  return (
    <header className="px-8 md:px-20 py-5 bg-slate-800 shadow-lg sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-lg font-semibold text-blue-400">
            Sayfuddinov Jasurbek blog 
          </Link>


          <nav className="space-x-6 text-slate-300">
            {headerLinks.map((el) => (
              <NavLink key={el.id} to={el.to} className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-400 hover:text-blue-400"}>
                {el.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
