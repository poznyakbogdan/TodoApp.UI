import moment from "moment";
import { STATUSES_TEXT, STATUSES_BADGES } from "./constants";
import Status from "./models/Status";

export function formatDateFromNow(date: Date) {
    return moment(date).fromNow();
}

export function formatStatus(status: Status){
    return STATUSES_TEXT[status];
}

export function getBadgeType(status: Status) {
    return STATUSES_BADGES[status];
}