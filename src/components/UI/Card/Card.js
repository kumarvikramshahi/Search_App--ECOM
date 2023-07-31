import React from 'react';
import "./card-styles.scss"

// Transform this into ts component by looking into
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components

// type Product for passing as props also create type for latest trend card

const Card = ({ inputProduct }) => {
    return (
        <div>
            <img src={inputProduct.image} alt={inputProduct.name ? inputProduct.name : inputProduct.shortDescription} />
            <div>
                {inputProduct?.shortDescription ? inputProduct.shortDescription : (
                    <span> {inputProduct.name} </span>
                )}
            </div>
        </div>
    );
};

export default Card;