import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  /* eslint-disable */
  getRestaurants ({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page , categoryId })
    console.log(searchParams)
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}