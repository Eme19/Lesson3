 
import { NavLink } from "react-router-dom";
 
import { useContext } from "react"; 
import { ThemeContext } from "./context/theme.context"; 
 
function NavBar() {
  const {theme, toggletheme} = useContext(ThemeContext); 
 
  return (
    <nav className={`Navbar ${theme}`}>   
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
        <button onClick={toggletheme}>{theme === "light" ? "🌗" : "🌙"}</button>
      </div>
    </nav>
  );
}
 
export default NavBar;