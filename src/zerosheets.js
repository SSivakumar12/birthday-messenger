
export async function getData(url, token) {
    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`.toString()
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
}