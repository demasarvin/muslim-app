import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkMenu = [
    {
      name: "Quran",
      path: "/quran",
    },
    {
      name: "Doa",
      path: "/doa",
    },
    {
      name: "Dzikir",
      path: "/dzikir",
    },
    {
      name: "Hadits",
      path: "/hadits",
    },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full bg-lime-700">
      <div className="container mx-auto gap-14 px-6 md:flex md:items-center md:px-8">
        <div>
          <div className="flex justify-between py-4 md:block ">
            <NavLink
              to="/"
              className="font-serif text-3xl font-semibold text-white"
            >
              Muslim App
            </NavLink>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block text-white"
              >
                {isMenuOpen ? (
                  <HiOutlineX className={`text-3xl hover:text-lime-300`} />
                ) : (
                  <HiOutlineMenuAlt3
                    className={`text-3xl hover:text-lime-300`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-4 md:block md:pb-0 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="space-y-4 text-lg font-semibold text-white md:flex md:space-x-5 md:space-y-0">
              {navLinkMenu.map((item, index) => (
                <div key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active text-lime-300" : "hover:text-lime-300"
                    }
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
