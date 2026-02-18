export function logInfo(message, meta = {}) {
    console.log(JSON.stringify({
        level: "INFO",
        message,
        ...meta,
        timestamp: new Date().toISOString()
    }));
}

export function logError(message, meta = {}) {
    console.error(JSON.stringify({
        level: "ERROR",
        message,
        ...meta,
        timestamp: new Date().toISOString()
    }));
}