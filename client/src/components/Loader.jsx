import React from "react";
import "./styles/loader.css";
const Loader = () => {
	return (
		<>
			<h1>Finding your location</h1>
			<div>
				<div className="frame">
					<div className="center">
						<div className="dot-1"></div>
						<div className="dot-2"></div>
						<div className="dot-3"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Loader;
