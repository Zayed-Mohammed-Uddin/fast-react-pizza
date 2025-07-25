import { getMenu } from "../../../services/apiRestaurant";

export const menuLoader = async function () {
	const data = await getMenu();
	return data;
};
