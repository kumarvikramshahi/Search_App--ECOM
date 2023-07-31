import React from "react"
import "./input.scss"

export default function Input(props) {
    return (
        <>
            <label htmlFor={props.name} > {props.label} </label>
            <input className={props.className ? "input" + props.className : "input"} {...props} />
        </>
    )
}