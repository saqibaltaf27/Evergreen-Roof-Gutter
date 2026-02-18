import axios from "axios";
import  { logError, logInfo } from './logger';

export async function sendToDiscord(webhookUrl, message) {
    const MAX_RETRIES = 3;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++){
        try{
            await axios.post(webhookUrl, message);
            logInfo("Message Successfully sent to Discord", {
                attempt
            });
            return;
        } catch (error) {
            logError("Discord send attempt failed.", {
                attempt,
                error: error.message
            });

            if (attempt === MAX_RETRIES) {
                throw new Error("Failed to send message after multiple attempts.");
            }
        }
    }
}