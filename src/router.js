import { createRouter, createWebHistory } from "vue-router"

import ListCategory from "./pages/ListCategory"
import ListType from "./pages/ListType"

const routes = [
    {
        name: 'list-category',
        path: '/category',
        component: ListCategory
    },
    {
        name: 'list-type',
        path: '/type',
        component: ListType
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router