import { NavLink } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
        </ul>
        </>
    );
}
