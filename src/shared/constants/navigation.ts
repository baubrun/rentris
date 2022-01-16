import { lazy } from "react"
import { INavigation } from "../models/navigation"


export const HOME_PAGE: INavigation = {
    path: "/",
    render: lazy(() => import("../../components/pages/Home/Home")),
}


export const SEARCH_PAGE: INavigation = {
    path: "/search",
    render: lazy(() => import("../../components/pages/Search/Search")),
}

export const PROPERTY_PAGE: INavigation = {
    path: "/property/:id",
    render: lazy(() => import("../../components/pages/Property/PropertyDetail")),
}





export const PAGES = [
    HOME_PAGE,
    PROPERTY_PAGE,
    SEARCH_PAGE,
]