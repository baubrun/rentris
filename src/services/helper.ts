import qs from "qs";
import { IPropertyQuery } from "../shared/models/property";


export const propertyQuery = (query: IPropertyQuery): string => {
    const q =  qs.stringify(
        {
            areaMax : query.areaMax || 35000,
            bathsMin : query.bathsMin || 0,
            categoryExternalID : query.categoryExternalID || 4,
            hitsPerPage: 6,
            locationExternalIDs : query.locationExternalIDs || 5002,
            minPrice : query.minPrice || 0,
            maxPrice : query.maxPrice || 1000000,
            roomsMin : query.roomsMin || 0,
            purpose : query.purpose || "for-rent",
            rentFrequency : query.rentFrequency || "yearly",
            sort : query.sort || "price-desc",
        }
    )
    return `${process.env.REACT_APP_BASE_URL}/properties/list?${q}`
}

