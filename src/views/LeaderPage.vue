<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Leaderboard</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Leaderboard</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-card-header>
				<ion-card-title>Leaderboard</ion-card-title>
				<ion-card-subtitle>Top Snow Angels in Calgary!</ion-card-subtitle>
			</ion-card-header>

			<ion-card-content>
				<ion-list>
					<ion-item v-for="(user, index) in users" :key="index">
						<ion-avatar slot="start">
							<img :src="'https://picsum.photos/80/80?random=' + index" alt="avatar"/>
						</ion-avatar>
						<ion-label>{{ user.rank }}. {{ user.username }}</ion-label>
						<ion-label>Points: {{ user.points }}</ion-label>

					</ion-item>
				</ion-list>

				<ion-infinite-scroll @ionInfinite="ionInfinite">
					<ion-infinite-scroll-content></ion-infinite-scroll-content>
				</ion-infinite-scroll>
			</ion-card-content>

		</ion-content>
	</ion-page>
</template>

<script lang="ts" setup>
import {IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";</script>

<script lang="ts">
import {
	IonCardContent,
	IonCardSubtitle,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonInfiniteScroll,
	IonInfiniteScrollContent,
	IonList,
	IonItem,
	IonAvatar,
	IonLabel,
	InfiniteScrollCustomEvent,
} from "@ionic/vue";
import {defineComponent} from "vue";


interface User {
	rank: number;
	username: string;
	points: number;
}

export default defineComponent({
	components: {
		IonCardContent,
		IonCardTitle,
		IonCardHeader,
		IonCardSubtitle,
		IonContent,
		IonInfiniteScroll,
		IonInfiniteScrollContent,
		IonList,
		IonItem,
		IonAvatar,
		IonLabel,

	},
	data() {
		return {
			users: [],
		}
	},
	methods: {
		ionInfinite: function (ev: InfiniteScrollCustomEvent) {
			this.getItems();
			setTimeout(() => ev.target.complete(), 500);
		},
		getItems: function() {
			const leaderboard = this.fetchLeaderboard();
			for (let i = 0; i < leaderboard.length; i++) {
				const user = leaderboard[i]

				this.users.push(user);
			}
		},
		fetchLeaderboard: function (){
			return [
				{rank: 1, username: "Taras", points: 69420},
				{rank: 2, username: "Eshan", points: 42069},
				{rank: 3, username: "Nova", points: 13337},
				{rank: 4, username: "Andres", points: 1337}
			]
		}
	},
	created() {
		this.getItems();
	},
});
</script>


<style>
ion-card-header {
	width: 50%;
	display: flex;
	flex-flow: column-reverse;
}
</style>
