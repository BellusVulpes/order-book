const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []

  if (existingBook.length === 0) {
    updatedBook.push(incomingOrder)

    return updatedBook
  }

  existingBook.forEach((currentOrder, index) => {
    if (orderType(currentOrder, incomingOrder) && orderPrice(currentOrder, incomingOrder)) {
      const quantity = findQuantityAmount(currentOrder, incomingOrder)

      currentOrder.quantity -= quantity
      incomingOrder.quantity -= quantity
    }

    if (currentOrder.quantity > 0) {
      updatedBook.push(currentOrder)
    }

    existingBook.splice(index, 1)
  })

  let returnOrder = existingBook.concat(updatedBook)

  if (incomingOrder.quantity > 0) {
    returnOrder.push(incomingOrder)
  }

  return returnOrder
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

const findQuantityAmount = (existingBook, incomingOrder) => {
  const quantityAmount = Math.min(existingBook.quantity, incomingOrder.quantity)

  return quantityAmount
}

module.exports = reconcileOrder
