import React, { ChangeEventHandler, useEffect, useState } from "react";
import "./home.scss";
import Header from "../../components/header";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import { Product, ProductCardStyle } from "../../types/product";
import Card from "../../components/UI/Card/Card";
import { LatestTrendsData, PopularSuggestions } from "../../fakeData";

// see designs at https://www.figma.com/proto/uImaHzeMhKCO8pvpC6f76U/Search-and-Search-results?node-id=2-5&scaling=scale-down
// make search bar
// add background image and company logo as shown in pic

export default function Home(): JSX.Element {
	const [isSearchBarFocused, setSearchBarFocused] = useState<boolean>(false);
	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		console.log(event.target.value);
	};

	const handleSearchBarFocus = () => setSearchBarFocused(!isSearchBarFocused);

	useEffect(() => {
		// const fetchProduct = async () => {
		// 	try {
		// 		const response = await fetch("https://fakestoreapi.com/products");
		// 		const respData = await response.json();
		// 	} catch (err) {
		// 		console.log(err);
		// 	}
		// };
		// fetchProduct();
	}, []);

	return (
		<div id="home">
			{/* header */}
			<Header />

			{/* search bar */}
			<div className="searchSection">
				<SearchBar handleChange={handleChange} isSmall={false} onFocus={handleSearchBarFocus} onBlur={handleSearchBarFocus} />
			</div>
			{isSearchBarFocused ? (
				<div className="suggestionBox">
					<div className="boxHeading">Latest Trends</div>
					<div className="latestTrends">
						{LatestTrendsData?.map((item, idx) => (
							<Card inputProduct={item} isSmall={true} key={idx} />
						))}
					</div>
					<div className="boxHeading">Popular Suggestions</div>
					<div>
						{PopularSuggestions.map((item, idx) => (
							<div key={idx}>
								<a href="." className="psLink">
									{item}
								</a>
								<br />
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
}
