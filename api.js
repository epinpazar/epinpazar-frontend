const API_BASE = "https://epinpazardemo.onrender.com";

async function api(path, method = "GET", body = null, token = null) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = "Bearer " + token;

    const res = await fetch(API_BASE + path, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    });

    return res.json().catch(() => ({ error: "parse error" }));
}
