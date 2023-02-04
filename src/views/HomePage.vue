<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Home</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" class="ion-padding">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Home</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-text>
				<h1>1000 Points</h1>
			</ion-text>

			<div style="height:500px; width:100%">
				<l-map ref="map" :zoom="5" :center="this.center">
					<l-tile-layer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						layer-type="base"
						name="OpenStreetMap"
					></l-tile-layer>
					<l-control-layers />

					<l-marker v-for="project in projects" :key="project.id" :lat-lng="[project.lat, project.long]" draggable>
						<l-popup>
							{{ project.point }} Points
							<br />
							<a href="#">Link</a>
						</l-popup>
					</l-marker>
				</l-map>
			</div>

			<ion-button expand="block ion-margin-top">Request snow cleaning</ion-button>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton} from "@ionic/vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
	components: {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonText,
		IonButton,
		LMap,
		LTileLayer,
		LControlLayers,
		LMarker,
		LPopup,
	},
	data() {
		return {
			center: [47.41322, -1.219482],
			projects: [],
		}
	},
	methods: {
		fetchProjects() {
			this.projects.push({
				id: 1,
				lat: 47.41322,
				long: -1.219482,
				point: 5,
			});
		},
	},
	created() {
		this.fetchProjects();
	}
}
</script>



