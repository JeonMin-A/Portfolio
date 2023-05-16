import { createWebHistory, createRouter } from "vue-router";

const routes =[
    {
        // 메인 홈
        path: "/",
        name: "MainHome",
        component: ()=> import('@/pages/Home')
    },
    {
        // 프로필
        path: "/Profile",
        name: "ProfilePage",
        component: ()=> import('@/pages/Profile')
    },
    {
        // 스킬
        path: "/skill",
        name: "SkillPage",
        component: ()=> import('@/pages/Skill')
    },
    {
        // 포트폴리오
        path: "/portfolio",
        name: "PortfolioPage",
        component: ()=> import('@/pages/Portfolio')
    },
    // {
    //     // 연락처
    //     path: "/Contact",
    //     name: "ContactPage",
    //     component: ()=> import('@/pages/Contact')
    // },
    {
        // 404
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
    {
        // 404 페이지
        path: "/404",
        component: ()=> import('@/pages/NotFound')

    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;