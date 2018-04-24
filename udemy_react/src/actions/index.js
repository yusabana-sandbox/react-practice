import { geocode } from '../domain/Geocoder'
import { searchHotelByLocation } from '../domain/HotelRepository'

// place をもらって dispatch を引数にした関数を返している
export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place })
export const setErrorMessage = message => dispatch =>
  dispatch({ type: 'CHANGE_ERROR_MESSAGE', message })
export const setHotels = hotels => dispatch => dispatch({ type: 'CHANGE_HOTELS', hotels })
export const setSortKey = sortKey => dispatch => dispatch({ type: 'CHANGE_SORT_KEY', sortKey })

// getState は store のメソッド
export const startSearch = () => (dispatch, getState) => {
  geocode(getState().place)
    .then(({ status, address, location }) => {
      switch (status) {
        case 'OK': {
          dispatch({ type: 'GEOCODE_FETCHED', address, location })
          return searchHotelByLocation(location)
        }
        case 'ZERO_RESULTS': {
          dispatch(setErrorMessage('結果が見つかりません'))
          break
        }
        default: {
          dispatch(setErrorMessage('エラーが発生しました'))
        }
      }
      return []
    })
    .then(hotels => {
      dispatch(setHotels(hotels))
    })
    .catch(error => {
      console.log(`ERROR :: ${error}`)
      dispatch(setErrorMessage('通信に失敗しました'))
    })
}
