import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/was-ich-biete',
            component: Skills
        },
        {
            path: '/ueber-mich',
            component: About
        },
        {
            path: '/projekte',
            component: Projects
        },
        {
            path: 'contact',
            component: Contact
        }
    ]
})
