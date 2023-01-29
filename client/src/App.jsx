import "./App.css";
import { getSecret, getData } from "./api";
import { useState } from "react";
import { useEffect } from "react";
import Weather from "./components/Weather";

function App() {
	const [secret, setSecret] = useState();
	const key = "weather";

	function load() {
		let lat, long;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				long = position.coords.longitude;
				lat = position.coords.latitude;
				let coords = `${lat} ${long}`;
				async function newSecret() {
					const data = await getSecret(key).then((result) =>
						getData(result, coords)
					);
					setSecret(data);
					console.log(data.current);
					console.log(data.current.temp_c);
					return data;
				}
				console.log("finished loading");
				return newSecret();
			});
		}
	}
	useEffect(() => {
		load();
	}, []);

	return (
		<div className="main">
			{secret ? (
				<Weather data={secret} />
			) : (
				<h1>Please enable your location :(</h1>
			)}
		</div>
	);
}

export default App;
