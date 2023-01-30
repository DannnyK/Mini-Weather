import React from "react";
import { ReactComponent as MiniWeatherIcon } from "../icons/miniWeather.svg";

const HomePage = (loading) => {
	return (
		<>
			<MiniWeatherIcon id="Logo" />
			<h1>Mini Weather</h1>
		</>
	);
};

export default HomePage;
