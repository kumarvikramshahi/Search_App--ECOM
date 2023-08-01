import React from "react";
import "./card-styles.scss";

// Transform this into ts component by looking into
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components

// type Product for passing as props also create type for latest trend card

const Card = ({ inputProduct, isSmall }) => {
	return (
		<div className={isSmall ? "smallCard" : "card"}>
			<a href="." className="productLink">
				<img src={inputProduct.image} alt={inputProduct.title ? inputProduct.title : inputProduct.shortDescription} width="100%" height="auto" />

				{inputProduct.shortDescription ? inputProduct.shortDescription : <small> {inputProduct.title} </small>}
			</a>
		</div>
	);
};

export default Card;
