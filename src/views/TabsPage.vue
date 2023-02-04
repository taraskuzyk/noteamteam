<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="home" href="/tabs/home">
					<ion-icon :icon="home"/>
					<ion-label>Home</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="leader" href="/tabs/leader">
					<ion-icon :icon="barChart"/>
					<ion-label>Leaderboard</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="profile" href="/tabs/profile">
					<ion-icon :icon="person"/>
					<ion-label>Profile</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/vue";
import {home, barChart, person} from "ionicons/icons";</script>
