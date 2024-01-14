import axios from 'axios'
const getItems = async (items) => {
  console.log('getItems completed')
  try {
    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/items')
    items.value = data
  } catch (e) {
    console.log('err:', e)
  }
}

export default getItems
