const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw Error("Failed getting menu");

    const { data } = await res.json();
    return data;
  } catch (err) {
    throw Error(`Failed getting menu: ${err.message}`);
  }
}

export async function getOrder(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);
    if (!res.ok) throw Error(`Couldn't find order #${id}`);

    const { data } = await res.json();
    return data;
  } catch (err) {
    throw Error(`Failed getting order: ${err.message}`);
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error(`Failed updating your order: ${err.message}`);
  }
}
