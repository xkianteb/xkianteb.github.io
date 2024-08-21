import strftime from "strftime";
const utc = strftime.utc(); // YAML dates are in UTC
export function formatTime(format, date) {
    return utc(format, new Date(date));
}
