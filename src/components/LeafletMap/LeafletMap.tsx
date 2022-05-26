import { Container } from './LeafletMap.styles'
import { Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

type Marker = {
    name: string
    location: string
    lat: number
    log: number
  }

type Props = {
    markers?: Marker[]
}

export const LeafletMap = ({markers} : Props) => {
    return (
        <Container
            center={[-8.0659, -34.9258]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers?.map(marker => (
                <Marker position={[marker.lat, marker.log]}>
                    <Popup>
                        <div className="contentInfo">
                            <p>{marker.name}</p>
                            <p>{marker.location}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
      </Container>
    )
}