import millify from "millify"
import moment from "moment"


export const dateFormat = (date: string) => {
    if (!date) return ""
    return moment(date).format("LL") 
}

export const numberFormat = (num: number) => {
    return millify(num, {precision: 2, decimalSeparator: ','})
}