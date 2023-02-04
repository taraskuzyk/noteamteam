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
				<l-map ref="map" :zoom="5" :center="[47.41322, -1.219482]">
					<l-tile-layer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						layer-type="base"
						name="OpenStreetMap"
					></l-tile-layer>
					<l-control-layers />
					<l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
						<l-tooltip>
							lol
						</l-tooltip>
					</l-marker>

					<l-marker :lat-lng="[47.41322, -1.219482]">
						<l-icon icon-url="https://placekitten.com/25/40" :icon-size="[25, 40]" />
					</l-marker>

					<l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
						<l-popup>
							lol
						</l-popup>
					</l-marker>
				</l-map>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts" setup>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers, LMarker, LTooltip, LIcon, LPopup } from "@vue-leaflet/vue-leaflet";


</script>



