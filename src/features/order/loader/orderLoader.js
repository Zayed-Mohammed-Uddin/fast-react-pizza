import { getOrder } from "../../../services/apiRestaurant";

export const orderLoader = async function ({params}) {
    const data = await getOrder(params.id);
    return data;
};