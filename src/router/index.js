import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from "@/pages/MainPage";
import JobOffers from "@/pages/JobOffers";
import NotFound from "@/pages/NotFound";
import NewCalculator from "@/pages/NewCalculator";

const routes = [
	{
		path: '/',
		name: 'Home',
		component: MainPage
	},
	{
		path: '/jobs',
		name: 'Jobs',
		component: JobOffers
	},
	{
		path: '/calc',
		name: 'Calculator',
		component: NewCalculator
	},
	{
		path: '/:notFound(.*)',
		name: 'NotFound',
		component: NotFound,
	},
]

const router = createRouter({
	scrollBehavior(to) {
		if (to.hash) {
			return {el: to.hash}
		} else {
			return {x: 0, y: 0}
		}
	},
	history: createWebHashHistory(),
	routes
})

export default router
