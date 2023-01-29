import axios from "axios";
const url = "http://localhost:4000";

export async function getData(delta) {
	const result = await axios
		.get(`${url}/${delta}`)
		.then((response) => response.data)
		.catch((error) => console.error(error));
	return result;
}
