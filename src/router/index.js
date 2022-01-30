import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from "@/pages/MainPage";
import JobOffers from "@/pages/JobOffers";
import NotFound from "@/pages/NotFound";
import NewCalculator from "@/pages/NewCalculator";
import TourneoRent from "@/pages/TourneoRent";
import Freesasfalt from "@/pages/Freesasfalt";
import KruusMuld from "@/pages/KruusMuld";
import CarRepair from "@/pages/CarRepair";
import Biopuhastid from "@/pages/Biopuhastid";

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
		path: '/car_rent',
		name: 'CarRent',
		component: TourneoRent,
	},
	{
		path: '/frees',
		name: 'Freesasfalt',
		component: Freesasfalt,
	},
	{
		path: '/puiste',
		name: 'KruusMuld',
		component: KruusMuld,
	},
	{
		path: '/car_repair',
		name: 'CarRepair',
		component: CarRepair,
	},
	{
		path: '/biopuhastid',
		name: 'Biopuhastid',
		component: Biopuhastid,
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
