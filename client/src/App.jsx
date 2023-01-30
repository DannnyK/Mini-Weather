import "./App.css";
import { getSecret, getData } from "./api";
import { useState } from "react";
import { useEffect } from "react";
import Weather from "./components/Weather";
import HomePage from "./components/HomePage";
import { ReactComponent as LocationIcon } from "./icons/location-dot-solid.svg";
import Loader from "./components/Loader";

function App() {
	const [secret, setSecret] = useState(null);
	const [loading, setLoading] = useState(false);
	const key = "weather";

	function load() {
		let lat, long;
		if (navigator.geolocation) {
			setLoading(true);
			navigator.geolocation.getCurrentPosition(async (position) => {
				long = position.coords.longitude;
				lat = position.coords.latitude;
				let coords = `${lat} ${long}`;
				async function newSecret() {
					const data = await getSecret(key).then((result) =>
						getData(result, coords)
					);
					setLoading(false);
					setSecret(data);
					return data;
				}
				return newSecret();
			});
		} else {
			alert("Geolocation is not supported by this browser");
		}
	}
	useEffect(() => {
		// load();
	}, []);

	return (
		<div className="main">
			{secret ? (
				<Weather data={secret} />
			) : (
				<>
					{loading ? (
						<>
							<HomePage loading={loading} />
							<Loader />
						</>
					) : (
						<>
							<HomePage />
							<h1>Please enable your location</h1>
							<LocationIcon
								id="location-btn"
								onClick={() => {
									load();
								}}
							/>
						</>
					)}
				</>
			)}
		</div>
	);
}

export default App;
