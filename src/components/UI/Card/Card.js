import React, { useState } from "react";
import "./card-styles.scss";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Transform this into ts component by looking into
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components

// type Product for passing as props also create type for latest trend card

const Card = ({ inputProduct, link, isSmall, isWishlisted, setWislisted, id }) => {
	const [isViewButton, setViewButton] = useState(false);
	return (
		<div className={isSmall ? "smallCard" : "card"} onMouseOver={() => setViewButton(true)} onMouseOut={() => setViewButton(false)} >
			<div style={{ position: "relative" }}>
				<img src={inputProduct.image} alt={inputProduct.title ? inputProduct.title : inputProduct.shortDescription} width="100%" height="auto" className="cardImg" />
				{!isSmall ? (
					<>
						<Link to={link} className="viewProduct" style={isViewButton ? { display: "block" } : { display: "none" }}>View Product</Link>
						<div className="heart">
							{isWishlisted && inputProduct.id === id ? <FavoriteIcon color="error" fontSize="medium" /> : <FavoriteBorderIcon fontSize="medium" onClick={() => setWislisted(true)} />}
						</div>
					</>
				)
					: null
				}
			</div>

			{inputProduct.shortDescription ? <Link className="pslink" to={link}>{inputProduct.shortDescription}</Link> : <small> {inputProduct.title} </small>}
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
		</div >
	);
};

export default Card;
