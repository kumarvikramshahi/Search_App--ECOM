import React, { useEffect, useState, ChangeEventHandler } from "react";
import "./product.scss";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";
import Card from "../../components/UI/Card/Card";
import { Product } from "../../types/product";
import { Brands, GenerateFakeProductData } from "../../fakeData";
import { Rating, FormGroup, FormControlLabel, Checkbox } from "@mui/material/";
import SearchBar from "../../components/UI/SearchBar/SearchBar";

export default function Products() {
	const [fakeProductdata, setFakeProductdata] = useState<Product[] | null>(null);
	const [isWishlisted, setWislisted] = useState<boolean>(false);

	const starArray = [5, 4, 3, 2, 1];
	const pricesPoints = [500, 1000, 3000, 4000, 5000];

	// obtain category to fetch product
	const location = useLocation();
	const currentPath = location.pathname.split("/")[2];

	const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		console.log(event.target.value);
	};

	const handleFilterCheckBox = (item: Number, filterType: string) => {
		console.log(item);
		// if()
	};

	useEffect(() => {
		setFakeProductdata(GenerateFakeProductData());
	}, []);

	return (
		<div>
			<Header />
			<div className="searchHeadSection">
				<SearchBar handleChange={handleSearchChange} isSmall={true} onFocus={null} onBlur={null} />
			</div>
			<h1 className="heading">Search Results</h1>
			<div className="productPage">
				<div className="filterSide">
					<div className="brandsFilter">
						<div>BRAND</div>
						<FormGroup>
							{Brands?.map((item, idx) => (
								<FormControlLabel onChange={() => handleFilterCheckBox(idx, "brands")} control={<Checkbox />} label={<div style={{ textTransform: "capitalize" }}>{item}</div>} />
							))}
						</FormGroup>
					</div>
					<hr className="filterSperator" />
					<div className="priceRangeFilter">
						<div>PRICE RANGE</div>
						<FormGroup>
							{pricesPoints.map((item, idx) =>
								idx < pricesPoints.length - 1 ? (
									idx === 0 ? (
										<FormControlLabel onChange={() => handleFilterCheckBox(item, "price")} control={<Checkbox />} label={<div>Under {item}</div>} />
									) : (
										<FormControlLabel
											onChange={() => handleFilterCheckBox(item, "price")}
											control={<Checkbox />}
											label={
												<div>
													{item} To {pricesPoints[idx + 1]}
												</div>
											}
										/>
									)
								) : null
							)}
						</FormGroup>
					</div>
					<hr className="filterSperator" />
					<div className="ratingsFilter">
						<div>RATINGS</div>
						<FormGroup>
							{starArray.map((item) => (
								<FormControlLabel
									onChange={() => handleFilterCheckBox(item, "rating")}
									control={<Checkbox />}
									label={<Rating name="half-rating-read" defaultValue={item} precision={1} readOnly />}
								/>
							))}
						</FormGroup>
					</div>
				</div>
				<div className="productCards">
					{fakeProductdata?.map((item, idx) => (
						<Card id={idx + 1} isWishlisted={isWishlisted} setWislisted={setWislisted} link={`/products/${item.id}`} inputProduct={item} isSmall={false} key={idx} />
					))}
				</div>
			</div>
		</div>
	);
}
