export function validatePayload(payload) {
    if(!payload || typeof payload != "object") {
        return{
            valid: false,
            reason: "Payload must be a JSON object."
        };
    }

    const { Name, ServiceType } = payload;

    if(typeof Name != "string" || Name.trim().length === 0) {
        return {
            valid: false,
            reason: "Name is required and must be a non-empty string."
        };
    }
    
    if(typeof ServiceType != "string" || ServiceType.trim().length === 0) {
        return {
            valid: false,
            reason: "ServiceType is required and must be a non-empty string."
        };
    }

    return {
        valid: true
    };
}