export const isEmpty = (object: any) => {
  let empty = true
  Object.values(object).forEach((item) => {
    if (item !== '') {
      empty = false
    }
  })
  return empty
}