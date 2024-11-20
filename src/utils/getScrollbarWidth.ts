export const getScrollbarWidth = () => {
  const container = document.createElement('div')

  document.body.appendChild(container)
  container.style.overflow = 'scroll'

  const inner = document.createElement('div')
  container.appendChild(inner)

  const scrollbarWidth = container.offsetWidth - inner.offsetWidth
  document.body.removeChild(container)

  return scrollbarWidth
}
