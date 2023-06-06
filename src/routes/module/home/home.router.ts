import { ScreenLayout } from "../../screen-layouts";
import { routesName } from '../../route-name'


export const homeRoute = {
    path: "/",
    name: routesName.HOME,
    component: () => import('@/views/home/page/TheHome.vue'),
    // beforeEnter: loginGuard,
    meta: {
        layout: ScreenLayout.DEFAULT_LAYOUT
    }
};