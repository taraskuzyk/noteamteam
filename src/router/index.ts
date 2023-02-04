import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";
import TabsPage from "../views/TabsPage.vue"
import CleanRequestPage from "../views/CleanRequestPage.vue"
import SubmitTaskPage from "../views/SubmitTaskPage.vue"
import TaskDetailsPage from "../views/TaskDetailsPage.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/tabs/home"
	},
	{
		path: "/tabs/",
		component: TabsPage,
		children: [
			{
				path: "",
				redirect: "/tabs/home"
			},
			{
				path: "home",
				component: () => import("@/views/HomePage.vue")
			},
			{
				path: "leader",
				component: () => import("@/views/LeaderPage.vue")
			},
			{
				path: "profile",
				component: () => import("@/views/ProfilePage.vue")
			},
			{
				path: "request-clean",
				component: () => import("@/views/CleanRequestPage.vue")
			},
			{
				path: "submit-task",
				component: () => import("@/views/SubmitTaskPage.vue")
			},
			{
				path: "task-details",
				component: () => import("@/views/TaskDetailsPage.vue")
			}
		]
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
