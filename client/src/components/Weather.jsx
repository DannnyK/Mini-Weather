import React from "react";
import { ReactComponent as WindIcon } from "../icons/wind-solid.svg";
import { ReactComponent as DropIcon } from "../icons/droplet-solid.svg";
import { ReactComponent as SunIcon } from "../icons/sun-solid.svg";

const Weather = (data) => {
	const information = data.data;

	return (
		<>
			<div className="location">
				<div className="location-title">
					<h1>{information?.location.name}</h1>
					<h3>{information?.location.region}</h3>
				</div>
				<div className="location-icon">
					<img
						src={"https:" + information?.current.condition.icon}
						alt={information?.current.condition.text}
					/>
				</div>
			</div>
			<h2 id="condition">It's {information?.current.condition.text} today</h2>

			<div className="temperature">
				<div className="temperature-degree">
					<h1>{information?.current.temp_c}</h1>
				</div>
				<span className="temperature-unit">°C</span>
			</div>
			<div className="temperature-information">
				<h3 id="temperature-feels-like">
					Feels like {information?.current.feelslike_c}°
				</h3>
				<div className="other-information">
					<div className="card">
						<WindIcon />
						<h3>Wind</h3>
						<p>{information?.current.wind_kph} km/h</p>
					</div>
					<div className="card">
						<DropIcon />
						<h3>Humidity</h3>
						<p>{information?.current.humidity}%</p>
					</div>
					<div className="card">
						<SunIcon />
						<h3>UV index</h3>
						<p>{information?.current.uv < 6 ? "Normal" : "High"}</p>
					</div>
				</div>
				<h3 id="wind-direction">
					Wind direction -<span>{information?.current.wind_degree}°</span>
					<span>{information?.current.wind_dir}</span>
				</h3>
				<h3 id="visible-range">
					Visible range - <span>{information?.current.vis_km} km</span>
				</h3>
			</div>

			<a
				id="disclaimer"
				href="https://www.weatherapi.com/"
				title="Free Weather API"
			>
				<img
					src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
					alt="Weather data by WeatherAPI.com"
					border="0"
				/>
			</a>
		</>
	);
};

export default Weather;
