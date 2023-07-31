import React, { ChangeEventHandler, useEffect } from "react";
import Header from "../../components/header";
import Input from "../../components/UI/Input/Input";

// see designs at https://www.figma.com/proto/uImaHzeMhKCO8pvpC6f76U/Search-and-Search-results?node-id=2-5&scaling=scale-down
// make search bar
// add background image and company logo as shown in pic 

export default function Home() : JSX.Element {
    const handleChange : ChangeEventHandler<HTMLInputElement> = (event)=> {
        return "hi"
    }

    useEffect(()=>{

        console.log(GenerateFakeProductData(10))
    },[])

    return (
        <div>
            {/* header */}
            <Header />

            {/* search bar */}
            <Input
                type="search"
                id="search"
                placeholder={"Search"}
                name="homePageSearch"
                onChange={handleChange}
            />
        </div>
    )
}