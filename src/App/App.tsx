import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Products from "../pages/products";

const App = () => {
	return (
		<BrowserRouter>
			{/* <NotFound /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:category" element={<Products />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
