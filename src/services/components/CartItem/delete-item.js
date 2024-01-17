import axios from 'axios'

const deleteItem = async (drawerItems, items, item) => {
  for (const el of items.value) {
    if (el.id === item.itemId) {
      el.isAdded = !el.isAdded
    }
  }
  drawerItems.value = drawerItems.value.filter((el) => el.itemId !== item.itemId)

  const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/added').catch((e) => {
    console.error('errorGET addDrawerItems: ', e)
  })

  let id
  for (const el of data) {
    if (el.itemId === item.itemId) {
      id = el.id
    }
  }
  console.log('true: ', drawerItems.value)
  await axios.delete('https://3b693c9b64066ada.mokky.dev/added/' + id).catch((e) => {
    console.error('errorDELETE deleteItem: ', e)
  })
}

export default deleteItem
