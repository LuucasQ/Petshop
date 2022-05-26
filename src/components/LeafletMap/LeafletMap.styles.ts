import styled, { css } from 'styled-components'
import { MapContainer } from 'react-leaflet'

export const Container = styled(MapContainer)`
  ${() => css`
    .leaflet-popup-content-wrapper {
      border-radius: 32px !important;
    }
    .leaflet-popup-content {
      width: max-content;
      display: flex;
      flex-direction: column;
      margin: 0;
      
      p {
        margin: 0;
      }
      > img {
        width: 100%;
      }
      .contentInfo {
        display: flex;
        flex-direction: column;
        padding: 8px 16px;
        p:nth-child(1) {
          font-weight: 600;
        }
        p {
          white-space: nowrap;
        }
      }
    }
    .leaflet-popup-close-button {
      display: none;
    }
  `}
`