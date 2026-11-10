// Reference contract comes from the user-provided 2.0 source. No business service is connected by default.
// Use a same-origin HTTPS gateway for hosted use; a private HTTP LAN service cannot be fetched from an HTTPS page.
window.LUNA7_CONFIG={mode:'disconnected',baseUrl:'/api',timeoutMs:30000,allowWrites:false};
