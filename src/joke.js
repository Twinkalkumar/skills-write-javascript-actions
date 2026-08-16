import request from "request-promise";

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    Headers: {
        accept: "application/json",
        "User-Agent": "Writing Javascript action Github Skills exercise.",
    },
    json: true,
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

export default getJoke;