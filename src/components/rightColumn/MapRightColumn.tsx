import { DirectionsRenderer, GoogleMap, useLoadScript } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import { usePathMass } from '../../state/state'

export const MapRightColumn = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: 'AIzaSyD0Q3W5hUzcB36p5yHr8D9BFAcZstRd3f8' })

    if (!isLoaded) return <div>Load...</div>
    return <Map />
}
function Map() {
    const activeMark = usePathMass(state => state.active)
    const [state, setState] = useState('')


    useEffect(() => {
        setState(<DirectionsRenderer directions={activeMark?.directionsResponse} />)
    }, [activeMark])

    return (
        <GoogleMap mapContainerStyle={{ height: "70%" }} zoom={14} center={activeMark?.markMass[0]} >
            {state}
        </GoogleMap>
    )
}