import moment from "moment"


export const dateFormat = (date: string) => {
    if (!date) return ""
    return moment(date).format("LL") 
}