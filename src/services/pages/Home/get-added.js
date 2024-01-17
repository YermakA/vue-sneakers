import axios from 'axios'
const getAdded = async (items, drawerItems) => {
  try {
    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/added')
    drawerItems.value = data
    for (const el of items.value) {
      for (const item of drawerItems.value) {
        if (el.id === item.itemId) {
          el.isAdded = !el.isAdded
        }
      }
    }
  } catch (e) {
    console.log('err:', e)
  }
}

export default getAdded
