const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []

  if (existingBook.length === 0) {
    updatedBook.push(incomingOrder)

    return updatedBook
  }

  existingBook.array.forEach((curOrder, index) => {
    if (orderType(existingBook, incomingOrder) && orderPrice(existingBook, incomingOrder)) {
      const quantity = findQuantity(existingBook, incomingOrder)

      existingBook.quantity -= quantity
      incomingOrder.quantity -= quantity
    }

    if (existingBook.quantity > 0) {
      updatedBook.push(existingBook)
    }

    existingBook.splice(index, 1)
  });

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

const findQuantity = (existingBook, incomingOrder) => {
  
}

module.exports = reconcileOrder
