import axios from "axios";
const backendUrl = "http://localhost:4000";
const weatherUrlStart = "https://api.weatherapi.com/v1/current.json?key=";

export async function getSecret(delta) {
	const result = await axios
		.get(`${backendUrl}/${delta ? delta : ""}`)
		.then((response) => response.data)
		.catch((error) => console.error(error));
	return result;
}

export async function getData(secret, coords) {
	const newUrl = `${weatherUrlStart}${secret}&q=${coords}&aqi=no`;
	const result = await axios
		.get(newUrl)
		.then((response) => response.data)
		.catch((error) => console.error(error));
	return result;
}
