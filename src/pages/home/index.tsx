import React, { ChangeEventHandler, useEffect, useState } from "react";
import "./home.scss";
import Header from "../../components/header";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import Card from "../../components/UI/Card/Card";
import { LatestTrendsData } from "../../fakeData";
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
	const [isSearchBarFocused, setSearchBarFocused] = useState<boolean>(false);
	const [categories, setCategories] = useState<string[] | null>(null);
	const [isLoading, setLoading] = useState<boolean>(false);
	const [fetchCategoryProduct, setFetchCategoryProduct] = useState<string>("");
	const [popularSuggestions, setPopularSuggestions] = useState<string[] | null>(null);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		let inputSearchString = event.target.value;
		if (categories != null) {
			for (let i = 0; i < categories.length; i++) {
				if (categories[i].toLowerCase().indexOf(inputSearchString) > -1) {
					setFetchCategoryProduct(categories[i]);
				}
			}
		}
	};

	const onInputBlur = () => {
		setTimeout(() => {
			setSearchBarFocused(false);
		}, 300);
	};

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true);
				const response = await fetch("https://fakestoreapi.com/products/categories");
				const respData = await response.json();
				setCategories(respData);
				setPopularSuggestions(respData);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				console.log(err);
			}
		};
		fetchCategories();
	}, []);

	return !isLoading ? (
		<div className="home">
			{/* header */}
			<Header />

			{/* search bar */}
			<div className="searchSection">
				<SearchBar handleChange={handleChange} isSmall={false} onFocus={() => setSearchBarFocused(true)} onBlur={onInputBlur} />
			</div>
			{isSearchBarFocused ? (
				<div className="suggestionBox">
					<div className="boxHeading">Latest Trends</div>
					<div className="latestTrends">
						{LatestTrendsData?.map((item, idx) => (
							<Card id={null} isWishlisted={null} setWislisted={null} link={`/products/${item.category}`} inputProduct={item} isSmall={true} key={idx} />
						))}
					</div>
					{popularSuggestions ? <div className="boxHeading">Popular Suggestions</div> : null}
					<div>
						{popularSuggestions?.map((item, idx) => (
							<div key={idx}>
								<Link className="psLink" to={`/products/${item}`}>
									{item}
								</Link>
								<br />
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	) : (
		<div></div>
	);
}
