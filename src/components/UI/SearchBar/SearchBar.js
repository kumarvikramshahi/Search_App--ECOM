import React from "react";
import "./searchBar-styles.scss";
import SearchIconSvg from "../../../assets/searchIconSvg";

const SearchBar = ({ isSmall, handleChange, onFocus, onBlur }) => {
	return (
		<div className={isSmall ? "searchBox searchBoxSmall" : "searchBox"}>
			<input type="search" className={isSmall ? "searchBar searchBarSmall" : "searchBar"} onChange={(e) => handleChange(e)} placeholder="Search" onFocus={onFocus} onBlur={onBlur} />
			<div className={isSmall ? "iconSvg iconSvgSmall" : "iconSvg"}><SearchIconSvg /></div>
		</div>
	);
};

export default SearchBar;
