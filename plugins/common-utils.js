export default function (context, inject) {
  inject('utils', {
    shortDate,
    pluralize,
  })

  function shortDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
      month: 'long',
      year: 'numeric',
    })
  }

  function pluralize(number, singularWord) {
    const text = `${number} ${singularWord}`
    if (number === 1) return text
    return text + 's'
  }
}
