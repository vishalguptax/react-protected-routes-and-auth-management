import { lazy } from "react";

export const publicRoutes = [
    {
        title:"Login",
        path:"/login",
        component: lazy(()=>import('../../pages/auth/Login'))
    },
    {
        title:"Forgot Password",
        path:"/forgot-password",
        component: lazy(()=>import('../../pages/auth/ForgotPassword'))
    }
]