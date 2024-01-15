import axios from 'axios'
import { toValue } from 'vue'

const addDrawerItems = async (drawerItems, items, item) => {
  for (const el of items.value) {
    if (el.id === item.itemId) {
      el.isAdded = !el.isAdded
    }
  }

  const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/added').catch((e) => {
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
    drawerItems.value = drawerItems.value.filter((el) => el.itemId !== item.itemId)
    console.log('true: ', drawerItems.value)
    await axios.delete('https://3b693c9b64066ada.mokky.dev/added/' + id).catch((e) => {
      console.error('errorDELETE addDrawerItems: ', e)
    })
  } else {
    drawerItems.value = [...data, { ...item }]
    console.log('false: ', drawerItems.value)
    await axios.post('https://3b693c9b64066ada.mokky.dev/added', toValue(item)).catch((e) => {
      console.error('errorGET addDrawerItems: ', e)
    })
  }
}

export default addDrawerItems
