let list, selectedItem, keyField

const add = (newItem) => {
  return [...list, newItem]
}

const del = (item) => {
  return list.filter((el) => el[keyField] != item[keyField])
}

const copy = (oldItem, newItem) => {
  let returnItem = {...oldItem}
  for(let prop in newItem) {
    returnItem[prop] = newItem[prop]
  }
  return returnItem

}

const edit = (newItem) => {
  return list.map((el) => el[keyField] === newItem[keyField] 
  ? copy(el, newItem) 
  : el )
}



const init = (theList, theKeyField) => {
  list = theList
  return {
    add, edit, del
  } 
}

export default init