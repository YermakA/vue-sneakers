import axios from 'axios'
const getFavorite = async (items, favorites) => {
  try {
    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/favorites')
    favorites.value = data
    for (const el of items.value) {
      for (const item of favorites.value) {
        if (el.id === item.itemId) {
          el.isFavorite = !el.isFavorite
        }
      }
    }
  } catch (e) {
    console.log('err:', e)
  }
  console.log(favorites.value)
}

export default getFavorite
