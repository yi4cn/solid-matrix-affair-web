const apiUrl = process.env['VUE_APP_CATALOGS_API_BASE_URL'];

export async function getMeta() {
    try {
        const res = await fetch(apiUrl + "/meta");
        const resJson = await res.json();
        if (resJson.success) return resJson.data;
        return null;
    } catch (e) {
        return null;
    }
}

export function getDesignUrl(design, style) {
    return apiUrl + "/subimage/" + design.id + "/" + style;
}