const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []

  if (existingBook.length === 0) {
    updatedBook.push(incomingOrder)

    return updatedBook
  }

  while (existingBook.length) {
    let currentOrder = existingBook.shift()

    if (orderType(currentOrder, incomingOrder) && orderPrice(currentOrder, incomingOrder)) {
      incomingOrder = fulfillOrder(currentOrder, incomingOrder)
    }

    else {
      updatedBook.push(currentOrder)
    } }

  updatedBook = updatedBook.concat(existingBook)

  if (incomingOrder.quantity > 0) {
    updatedBook.push(incomingOrder)
  }

  return updatedBook
}

const orderType = (existingBook, incomingOrder) => {
  if (existingBook.type !== incomingOrder.type) {
    return true
  } else {
    return false
  }
}

const orderPrice = (existingBook, incomingOrder) => {
  if (existingBook.price === incomingOrder.price) {
    return true
  } else {
    return false
  }
}

const fulfillOrder = (currentOrder, incomingOrder) => {
  if (incomingOrder.quantity >= currentOrder.quantity) {
    return { ...incomingOrder, quantity: incomingOrder.quantity - currentOrder.quantity }
  } else {
    return { ...currentOrder, quantity: currentOrder.quantity - incomingOrder.quantity }
  }
}

module.exports = reconcileOrder
