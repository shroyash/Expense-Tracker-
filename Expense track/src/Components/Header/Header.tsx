import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navBar = [
    { id: 1, path: "/Dashboard", display: "Dashboard" },
    { id: 2, path: "/ViewTransaction", display: "View Transaction" },
    { id: 3, path: "/AddIncome", display: "Add Income" },
    { id: 4, path: "/AddExpenses", display: "Add Expenses" },
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div>
      <header className="shadow">
        <nav className="navbar custom-container flex justify-between items-center py-4">
          {/* Mobile Menu button to toggle sidebar */}
          <div className="mobile-menu md:hidden z-50">
            <button onClick={() => setShowMenu(!showMenu)}>
              <i className={`ri-${showMenu ? "close" : "menu"}-line text-2xl text-orange-600`}></i>
            </button>
          </div>

          {/* Logo */}
          <div className="navbar__logo flex items-center space-x-2 -ml-10 md:ml-0 lg:-m-3">
            <h2 className="font-extrabold text-[1.1em]">
              <span>Expense</span>
              <span className="text-orange-600 font-bold font-serif">Tracker</span>
            </h2>
          </div>

          {/* Login/Signup buttons */}
          <div className="registerSignup flex space-x-4">
            <button>
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="bg-orange-600 px-4 py-2 text-white rounded-lg">
              <NavLink to="/register">Register</NavLink>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-600 text-white w-[60%] md:hidden p-5 z-40 transform transition-all ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } duration-300`}
      >
        <div className="navbar__menu">
          <ul>
            {navBar.map((menu) => (
              <li key={menu.id} className="mt-14" onClick={() => setShowMenu(false)}>
                <NavLink to={menu.path} className="block py-2 px-4 hover:bg-orange-600">
                  {menu.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-17 left-0 h-full bg-orange-600 text-white w-64 p-6">
        <div className="navbar__menu">
          <ul>
            {navBar.map((menu) => (
              <li key={menu.id} className="mt-6">
                <NavLink
                  to={menu.path}
                  className="block py-2 px-4 hover:bg-orange-800 rounded-lg"
                >
                  {menu.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          showMenu || window.innerWidth < 1024 ? "ml-[60%]" : "ml-[16rem]"
        }`}
      >
        {/* Your main content here */}
        <div className="container mx-auto p-6">
          {/* Content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Header;

