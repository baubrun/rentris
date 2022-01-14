import { lazy } from "react"
import { INavigation } from "../models/navigation"


export const HOME_PAGE: INavigation = {
    path: "/",
    render: lazy(() => import("../../components/pages/Home/Home")),
}





export const PAGES = [
    HOME_PAGE,
]