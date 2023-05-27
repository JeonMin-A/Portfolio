import { createWebHistory, createRouter } from "vue-router";

const routes =[
    {
        // MainHome
        path: "/",
        name: "HomePage",
        component: ()=> import('@/pages/Home')
    },
    {
        // About
        path: "/about",
        name: "AboutPage",
        component: ()=> import('@/pages/About')
    },
    {
        // Portfolio
        path: "/portfolio",
        name: "PortfolioPage",
        component: ()=> import('@/pages/Portfolio')
    },
    {
        // Contact
        path: "/contact",
        name: "ContactPage",
        component: ()=> import('@/pages/Contact')
    },
    {
        // 404
        // path: "/:pathMatch(.*)*",
        // redirect: "/404",
    },
    {
        // 404 페이지
        // path: "/404",
        // component: ()=> import('@/pages/NotFound')

    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;