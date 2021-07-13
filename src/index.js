
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let a = []
  if (matrix) {

    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0 && i !== 0) (
        a.push(matrix[i].sort((a, b) => b - a))
      )
      else {
        a.push(matrix[i].sort((a, b) => a - b))
      }
    }
    return a.flat(matrix.length)
  }

  else {
    return []
  }
}
