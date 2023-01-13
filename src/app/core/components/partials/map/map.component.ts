import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import {
    icon,
    LatLng,
    latLng,
    LatLngExpression,
    LatLngTuple,
    LeafletMouseEvent,
    Map,
    map,
    marker,
    Marker,
    tileLayer,
} from 'leaflet'
import { LocationService } from '../../../../service/location.service'
import { Order } from '../../../../shared/models/order'

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    @Input() order!: Order
    @ViewChild('map', { static: true }) mapRef!: ElementRef
    private readonly DEFAULT_LOC: LatLngTuple = [42.7148119, 42.0517415]
    private readonly ZOOM_LEVEL = 16
    private readonly MARKER_ICON = icon({
        iconUrl:
            'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
        iconSize: [42, 42],
        iconAnchor: [21, 42],
    })
    marker!: Marker
    map!: Map

    constructor(private locationS: LocationService) {}
    ngOnInit() {
        this.initMap()
    }

    initMap() {
        if (this.map) {
            return
        }
        this.map = map(this.mapRef.nativeElement, {
            attributionControl: false,
        }).setView(this.DEFAULT_LOC, 1)
        tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map)

        this.map.on('click', (e: LeafletMouseEvent) => {
            this.setMarker(e.latlng)
        })
    }
    location() {
        this.locationS.getCurrentLocation().subscribe({
            next: (l) => {
                console.log(l)
                this.map.setView(l, this.ZOOM_LEVEL)
                this.setMarker(l)
            },
        })
    }
    setMarker(markers: LatLngExpression) {
        this.addressLatLng = markers as LatLng
        if (this.marker) {
            this.marker.setLatLng(markers)
        }
        this.marker = marker(markers, {
            draggable: true,
            icon: this.MARKER_ICON,
        }).addTo(this.map)

        this.marker.on('dragend', () => {
            this.addressLatLng = this.marker.getLatLng()
        })
    }
    set addressLatLng(lat: LatLng) {
        lat.lat = parseFloat(lat.lat.toFixed(8))
        lat.lng = parseFloat(lat.lng.toFixed(8))
        this.order.adressLng = lat
        console.log(this.order.adressLng)
    }
}
