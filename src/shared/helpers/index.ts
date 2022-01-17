import millify from "millify"
import moment from "moment"


export const dateFormat = (date: string) => {
    if (!date) return ""
    return moment(date).format("LL") 
}

export const numberFormat = (num: any) => {
    return millify(+num || 0, {precision: 2, decimalSeparator: ','})
}

export const parsePath = (path: string) => {
    return path?.split("=")[1];
}