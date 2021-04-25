const reconcileOrder = (existingBook, incomingOrder) => {
  return emptyBook(existingBook, incomingOrder)
}

const emptyBook = (existingBook, incomingOrder) => {
  if (JSON.stringify(existingBook) === JSON.stringify([])) {
    let updatedBook = []

    updatedBook.push(incomingOrder)

    return updatedBook
  }
}

// const noBuys = (existingBook, incomingOrder) => {
//   let updatedBook = []


//   if (JSON.stringify(existingBook.type) === 'sell' && JSON.stringify(existingBook.type) !== 'buy') {
//     updatedBook = existingBook.push(incomingOrder)

//     return updatedBook
//   }
// }

module.exports = reconcileOrder
