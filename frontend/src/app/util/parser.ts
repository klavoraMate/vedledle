export default function toDateAndTime(date: Date) {
    const digits = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }).split(':');
    return `${date.toLocaleDateString()} ${digits[0]}:${digits[1]}`;
}