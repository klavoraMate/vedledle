export default function durationInMinutes(start: Date, end: Date) {
    return Math.abs(end.getTime() - start.getTime()) / 60000;
}