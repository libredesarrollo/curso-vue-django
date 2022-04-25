import { createRouter, createWebHistory } from "vue-router"

import ListCategory from "./pages/ListCategory"
import ListType from "./pages/ListType"
import ListElement from "./pages/ListElement"

import DetailElement from "./pages/detail/DetailElement"

import SaveCategory from "./pages/save/SaveCategory"
import SaveType from "./pages/save/SaveType"
import SaveElement from "./pages/save/SaveElement"

import BasePage from "./pages/BasePage"

const routes = [
    {
        path: '/list',
        component: BasePage,
        children: [
            {
                name: 'list-element',
                path: 'element/:type?/:id?',
                component: ListElement
            },
            {
                name: 'list-category',
                path: 'category',
                component: ListCategory
            },
            {
                name: 'list-type',
                path: 'type',
                component: ListType
            }
        ]
    },
    {
        path: '/detail',
        component: BasePage,
        children: [
            {
                name: 'detail-element',
                path: 'element/:slug',
                component: DetailElement
            }
        ]

    },
    {
        path: '/save',
        component: BasePage,
        children: [
            {
                name: 'save-category',
                path: 'category/:id?',
                component: SaveCategory
            }
        ]
    },
    {
        path: '/save',
        component: BasePage,
        children: [
            {
                name: 'save-type',
                path: 'type/:id?',
                component: SaveType
            }
        ]
    },
    {
        path: '/save',
        component: BasePage,
        children: [
            {
                name: 'save-element',
                path: 'element/:id?',
                component: SaveElement
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router