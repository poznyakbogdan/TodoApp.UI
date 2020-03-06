import Status from "./models/Status";

export const STATUSES_TEXT : {[key in Status]: string} = {
    [Status.NotStarted]: "Not started",
    [Status.InProgress]: "In progress",
    [Status.Done]: "Done",
}

export const STATUSES_BADGES : {[key in Status]: "secondary" | "primary" | "success"} = {
    [Status.NotStarted]: "secondary",
    [Status.InProgress]: "primary",
    [Status.Done]: "success",
}