import { Class } from "../interfaces/class";

export function booleanToYesNo(value: boolean) {
    return value ? "Yes" : "No";
}

export function keyValuePairToString(value: any): string {
    return Object.entries(value)
        .map((item) => `${item[0]}:${item[1]}`)
        .join("; ");
}

export function classListToString(value: Class[]): string {
    return value.map(item => item.name).join(", ");
}