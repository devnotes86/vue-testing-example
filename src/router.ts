import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/hello',
        },
        {
            path: '/hello',
            name: 'hello-world',
            component: () => import('./components/HelloWorld.vue')
        },
        {
            path: '/motorcycles/:id',
            name: 'motorcycles-details',
            component: () => import('./components/MotorcycleDetails.vue')
        },
        {
            path: '/motorcycles',
            name: 'motorcycles',
            component: () => import('./components/Motorcycles.vue')
        }
    ]
})