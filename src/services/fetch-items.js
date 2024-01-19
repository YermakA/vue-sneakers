import axios from 'axios'

const fetchItems = async (filters, items, drawerItems) => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/items', { params })
    data.map((el) => {
      el.isAdded = false
      el.isFavorite = false
      return el
    })

    for (const el of drawerItems.value) {
      for (const item of data) {
        if (el.itemId === item.id) item.isAdded = true
      }
    }
    items.value = data
    console.log(items.value)
  } catch (e) {
    console.log('error: ', e)
  }
}

export default fetchItems
