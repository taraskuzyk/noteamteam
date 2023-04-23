<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Request</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Request</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-list>
				<ion-item>
					<ion-label>Address</ion-label>
					<ion-textarea placeholder="Type the address which needs to be cleaned"></ion-textarea>
				</ion-item>
				<ion-item>
					<ion-label>Reward point</ion-label>
					<ion-select placeholder="Select point">
						<ion-select-option value="1">1 Point</ion-select-option>
						<ion-select-option value="2">2 Points</ion-select-option>
						<ion-select-option value="3">3 Points</ion-select-option>
						<ion-select-option value="4">4 Points</ion-select-option>
						<ion-select-option value="5">5 Points</ion-select-option>
					</ion-select>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonSelect,
	IonSelectOption,
	IonList,
	IonTextarea,
	IonLabel
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";</script>
