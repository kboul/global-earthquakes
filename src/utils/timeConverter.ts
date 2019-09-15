export const timeConverter = (time: number, offset: number): string => {
    var d = new Date(time);
    var utc = d.getTime() + d.getTimezoneOffset() * 60000; //This converts to UTC 00:00
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
};
