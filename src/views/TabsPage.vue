<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="tab1" href="/tabs/home">
					<ion-icon :icon="triangle"/>
					<ion-label>Home</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab2" href="/tabs/leader">
					<ion-icon :icon="ellipse"/>
					<ion-label>Leaderboard</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab3" href="/tabs/tab3">
					<ion-icon :icon="square"/>
					<ion-label>Tab 3</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/vue";
import {ellipse, square, triangle} from "ionicons/icons";</script>
