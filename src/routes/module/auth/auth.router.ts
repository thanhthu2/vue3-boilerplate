import { ScreenLayout } from "../../screen-layouts";
import { routesName } from '../../route-name'


export const loginRoute = {
    path: "/login",
    name: routesName.LOGIN,
    component: () => import('@/views/auth/pages/LoginPage.vue'),
    // beforeEnter: loginGuard,
    meta: {
        layout: ScreenLayout.AUTH_LAYOUT
    }
};