export function createDiscordEmbed(payload, mapsUrl) {
    const {
        Name,
        Phone, 
        ServiceType, 
        Address, 
        UrgencyLevel
    } = payload;

    const urgency = UrgencyLevel?.toLowerCase() === "high" ? "High" : "Standard";
    const isHigh = urgency === "High";
    const color = isHigh ? 16711680 : 65280;

    return {
        embeds: [
            {
                title: isHigh ? "HIGH PRIORITY JOB ALERT" : "New Service Request",
                color,
                fileds: [
                    {
                        name: "Customer",
                        value: Name.trim(),
                        inline: true
                    },
                    {
                        name: "Phone",
                        value: Phone?.trim() || "Not Provided",
                        inline: true
                    },
                    {
                        name: "Service Requested",
                        value: ServiceType.trim(),
                        inline: false
                    },
                    {
                        name: "Location",
                        value: mapsUrl ? `[Open in Google Maps](${mapsUrl})` : Address || "Not Provided",
                        inline: false
                    },
                    {
                        name: "Urgency Level",
                        value: urgency,
                        inline: true
                    }
                ],
                timestamp: new Date().toISOString(),
                footer: {
                    text: "Evergreen Roof & Gutter Dispatch System"
                }
            }
        ]
    };
}