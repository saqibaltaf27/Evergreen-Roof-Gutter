export function generateGoogleMapsUrl(address) {
    if(!address || typeof address != "string") {
        return null;
    }

    const encoded = encodeURIComponent(address.trim());
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}