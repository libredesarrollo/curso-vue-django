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
                path: "",
                redirect: () => {
                    return { name: 'list-element' }
                }
            },
            {
                name: 'list-element',
                path: 'element/:type?/:id?',
                components: {
                    default: ListElement,
                    title: { template: 'Listado de elementos' }
                }
            },
            {
                name: 'list-category',
                path: 'category',
                components: {
                    default: ListCategory,
                    title: { template: 'Listado de categorías' }
                }
            },
            {
                name: 'list-type',
                path: 'type',
                components: {
                    default: ListType,
                    title: { template: 'Listado de tipos' }
                }
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

                components: {
                    default: DetailElement,
                    title: { template: 'Detalle' }
                }
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
                components: {
                    default: SaveCategory,
                    title: { template: 'Listado de categorías' }
                }
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
                components: {
                    default: SaveType,
                    title: { template: 'Listado de categorías' }
                }
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
                components: {
                    default: SaveElement,
                    title: { template: 'Listado de categorías' }
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router