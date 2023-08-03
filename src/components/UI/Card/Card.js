import React from "react";
import "./card-styles.scss";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

// Transform this into ts component by looking into
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components

// type Product for passing as props also create type for latest trend card

const Card = ({ inputProduct, link, isSmall }) => {
	return (
		<div className={isSmall ? "smallCard" : "card"}>
			<Link to={link} className="productLink">
				<img src={inputProduct.image} alt={inputProduct.title ? inputProduct.title : inputProduct.shortDescription} width="100%" height="auto" className="cardImg" />

				{inputProduct.shortDescription ? inputProduct.shortDescription : <small> {inputProduct.title} </small>}
				{inputProduct.shortDescription ? null : (
					<small>
						<br />
						<del className="delOriginalPrice">Rs. {inputProduct.originalPrice}</del>
						<b className="price"> Rs. {inputProduct.price}</b>
						<br />
						<span>
							<Rating name="half-rating-read" defaultValue={inputProduct.rating} precision={0.1} readOnly />
							<span className="delOriginalPrice"> (210)</span>
						</span>
					</small>
				)}
			</Link>
		</div >
	);
};

export default Card;
