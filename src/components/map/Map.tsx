import { DirectionsRenderer, DirectionsService, GoogleMap, useLoadScript } from '@react-google-maps/api'
import { useEffect, } from 'react'
import { useNewPath } from '../../state/state'

import styles from './maps.module.css'


export default function Maps() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: 'AIzaSyD0Q3W5hUzcB36p5yHr8D9BFAcZstRd3f8' })

    if (!isLoaded) return <div>Load...</div>

    return <Map />
}
function Map() {
    const newPathMap = useNewPath(state => state)
    const centerMap = {
        lat: 49.44466787147777,
        lng: 32.044659230686115
    }
    const mouseEm = (ev) => {
        const newObj = {
            lat: ev.latLng.lat(),
            lng: ev.latLng.lng()
        }
        const centerr = new google.maps.LatLng(newObj)
        newPathMap.setMarkMass(centerr)
    }


    useEffect(() => {
        if (newPathMap.markMass.length >= 2) {
            const objDopMark = { location: newPathMap.markMass[newPathMap.markMass.length - 1] }
            newPathMap.setDopMark(objDopMark)
        }
        calculateRoute()
    }, [newPathMap.markMass])


    async function calculateRoute() {
        if (newPathMap.markMass.length === 0) {
            return
        }
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: newPathMap.markMass[0],
            waypoints: newPathMap.dopMark,
            destination: newPathMap.markMass[newPathMap.markMass.length - 1],
            travelMode: google.maps.TravelMode.WALKING,
        }).catch((e: Error) => console.log(e.message));
        newPathMap.setDistance(results.routes[0].legs[results.routes[0].legs.length - 1].distance?.text)
        newPathMap.setDirectionsResponse(results)
    }




    return <div className={styles.map}>
        <GoogleMap zoom={15}
            center={centerMap} onClick={ev => mouseEm(ev)}
            mapContainerClassName={styles.map}  >
            {newPathMap.directionsResponse && (
                <DirectionsRenderer directions={newPathMap.directionsResponse} />
            )}
        </GoogleMap>

    </div>
}


