import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { IoHomeSharp } from "react-icons/io5";

export function Navbar() {
	return (
		<>
			<div className="Nav">
				<ul className="NavList">
					<li className="NavLogo">
						<NavLink to="/" className="NavLogoText NavLink">
							<IoHomeSharp className="NavLogoIcon" />
							Home
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}
