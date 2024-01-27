import { lazy } from "react";

export const protectedRoutes = [
    {
        title:"Dashboard",
        path:"/",
        component: lazy(()=>import('../../pages/dashboard/Home'))
    },
    {
        title:"Profile",
        path:"/profile",
        component: lazy(()=>import('../../pages/profile/Profile'))
    }
]