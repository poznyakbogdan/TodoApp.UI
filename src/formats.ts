import moment from "moment";

export function formatDateFromNow(date: Date) {
    return moment(date).fromNow();
}