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
				<l-map ref="map" :zoom="10" :center="this.center">
					<l-tile-layer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						layer-type="base"
						name="OpenStreetMap"
					/>
					<l-control-layers/>

					<l-marker v-for="project in projects" :key="project.id" :lat-lng="[project.lat, project.long]">
						<l-popup>
							{{ project.points }} Points
							<br/>
							<ion-button v-on:click="takeProject(project)">Link</ion-button>
						</l-popup>
					</l-marker>
				</l-map>
			</div>

			<ion-button expand="block ion-margin-top">Request snow cleaning</ion-button>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import {IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar} from "@ionic/vue";
import "leaflet/dist/leaflet.css";
import {LControlLayers, LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import {Project} from "../interfaces";


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
			center: [51.0447, -114.0719],
			projects: [],
		}
	},
	methods: {
		fetchProjects() {
			this.projects.push(
				{
					id: 1,
					lat: 51.0490,
					long: -114.0800,
					points: 5,
				},
				{
					id: 2,
					points: 10,
					lat: 51.0447,
					long: -114.0719,
				}
			);
		},
		takeProject(project: Project) {
			alert(project)
		}
	},
	created() {
		this.fetchProjects();
	}
}
</script>



