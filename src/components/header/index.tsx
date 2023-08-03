import React from "react";
import "./header.scss";
// import SearchIconSvg from "../../assets/searchIconSvg";

export default function Header() {
	return (
		<header className="header">
			<a className="logo" href="./">
				z e v<span className="scanIcon">🔍</span>
			</a>
		</header>
	);
}
