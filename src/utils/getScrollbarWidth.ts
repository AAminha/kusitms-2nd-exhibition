let scrollbarWidth: number | undefined

export const getScrollbarWidth = () => {
  if (scrollbarWidth !== undefined) return scrollbarWidth

  const container = document.createElement('div')

  document.body.appendChild(container)
  container.style.overflow = 'scroll'

  const inner = document.createElement('div')
  container.appendChild(inner)

  scrollbarWidth = container.offsetWidth - inner.offsetWidth
  document.body.removeChild(container)

  return scrollbarWidth
}
