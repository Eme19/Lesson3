import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";

const Profileing =  "https://i.imgur.com/i1gsj0v.png";

function HomePage(){
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`HomePage ${theme}`}>
            <h1>Hi My Name is ......</h1>
            <img src={Profileing} className="profile" alt=""/>

        </div>
    )
}

export default HomePage;