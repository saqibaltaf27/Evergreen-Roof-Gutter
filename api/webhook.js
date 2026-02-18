import { validatePayload } from "../utils/validator";
import { generateGoogleMapsUrl } from "../utils/maps";
import { createDiscordEmbed } from "../utils/discordFormatter";
import { sendToDiscord } from "../utils/discordClient";
import { logError, logInfo } from "../utils/logger";

export default async function handler(req, res) {
    if(req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed"
        });
    }

    if(!process.env.DISCORD_WEBHOOK_URL){
        logError("Missing DISCORD_WEBHOOK_URL environment variable");
        return res.status(500).json({
            message: "Server Configuration Error."
        });
    }

    try {
        const payload = req.body;
        const validation = validatePayload(payload);
        if(!validation.valid) {
            logError("Payload Validation Failed", {
                reason: validation.reason
            });
            return res.status(400).json({
                message: validation.reason
            });
        }

        const mapsUrl = generateGoogleMapsUrl(payload.Address);
        const discordMessage = createDiscordEmbed(payload, mapsUrl);

        await sendToDiscord(process.env.DISCORD_WEBHOOK_URL, discordMessage);
        logInfo("Lead Processed Successfully");

        return res.status(200).json({
            message: "Lead Successfully sent to Discord."
        });
    } catch(error) {
        logError("Unhandled Error in Webhook", {
            error: error.message
        });

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}