import axios from 'axios'
const fetchItems = async (filters, items) => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/items', { params })
    items.value = data
    console.log(items.value)
  } catch (e) {
    console.log('error: ', e)
  }
}

export default fetchItems
