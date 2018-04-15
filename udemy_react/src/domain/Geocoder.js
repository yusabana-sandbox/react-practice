import axios from 'axios'

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json'

export const geocode = place =>
  axios.get(GEOCODE_ENDPOINT, { params: { address: place } }).then(results => {
    const data = results.data // eslint-disable-line prefer-destructuring
    const status = data.status // eslint-disable-line prefer-destructuring
    const result = data.results[0]

    if (typeof result === 'undefined') {
      return { status }
    }

    const address = result.formatted_address
    const location = result.geometry.location // eslint-disable-line prefer-destructuring
    return { status, address, location }
  })

export const reverseGeocode = () => null
