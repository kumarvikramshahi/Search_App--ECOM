import React, { useEffect } from "react";
import "./notFound.scss";

export default function NotFound() {
	useEffect(() => {
		console.log("hi");
	}, []);
	return (
		<div className="notFound">
			<div id="oops">OOPS! 404</div>
			<div className="pnf">Page Not Found</div>
		</div>
	);
}
