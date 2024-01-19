import { toValue } from 'vue'
import axios from 'axios'
const onClickFavorite = async (item, favorites, items) => {
  for (const el of items.value) {
    if (el.id === item.itemId) {
      el.isFavorite = !el.isFavorite
    }
  }

  const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/favorites').catch((e) => {
    console.error('errorGET addDrawerItems: ', e)
  })

  let elIsAdded = false
  let id
  for (const el of data) {
    if (el.itemId === item.itemId) {
      elIsAdded = true
      id = el.id
    }
  }

  if (elIsAdded) {
    favorites.value = favorites.value.filter((el) => el.itemId !== item.itemId)
    await axios.delete('https://3b693c9b64066ada.mokky.dev/favorites/' + id).catch((e) => {
      console.error('errorDELETE addDrawerItems: ', e)
    })
  } else {
    favorites.value = [...data, { ...item }]
    await axios.post('https://3b693c9b64066ada.mokky.dev/favorites', toValue(item)).catch((e) => {
      console.error('errorGET addDrawerItems: ', e)
    })
  }
}

export default onClickFavorite
