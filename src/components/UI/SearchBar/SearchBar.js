import React from "react"
import "./searchBar-styles.scss"

export default function SearchBar(props) {
    return (
        <>
            <input type="search" id="search" placeholder={"Search"} className={props.className ? "input" + props.className : "input"} {...props} />
        </>
    )
}