import axios from 'axios'
const getItems = async (items) => {
  try {
    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/items')
    data.map((el) => {
      el.isAdded = false
      el.isFavorite = false
      return el
    })
    items.value = data
    console.log('getItems completed')
  } catch (e) {
    console.log('err:', e)
  }
}

export default getItems
