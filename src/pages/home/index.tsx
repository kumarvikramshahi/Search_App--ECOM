import React, { ChangeEventHandler, useEffect } from "react";
import "./home.scss";
import Header from "../../components/header";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import { GenerateFakeProductData } from "../../fakeData";

// see designs at https://www.figma.com/proto/uImaHzeMhKCO8pvpC6f76U/Search-and-Search-results?node-id=2-5&scaling=scale-down
// make search bar
// add background image and company logo as shown in pic

export default function Home(): JSX.Element {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		return "hi";
	};

	useEffect(() => {
		console.log(GenerateFakeProductData(10));
	}, []);

	return (
		<div id="home">
			{/* header */}
			<Header />

			{/* search bar */}
			<div className="searchBar">
				<SearchBar onChange={handleChange} />
			</div>
		</div>
	);
}
