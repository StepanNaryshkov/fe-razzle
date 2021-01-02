export const isResponseOk = (response: {status: number}) => response.status >= 200 && response.status < 300;
