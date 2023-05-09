import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import WatchPage from "@/views/WatchPage.vue";
const routes = [
    {
        path: "/",
        name: "home_page",
        component: HomePage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not_found",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/watch:id",
        name: "watch_page",
        props: true,
        component: WatchPage,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;