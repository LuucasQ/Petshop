import { Container } from './LeafletMap.styles'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

export const LeafletMap = () => {
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
      </Container>
    )
}