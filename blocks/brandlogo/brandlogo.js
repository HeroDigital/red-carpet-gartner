/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const linktag = block.querySelector('a')
  const linkText = linktag.textContent
  const img = document.createElement('img')
  img.src = './icons/gartner.svg'
  img.width = '116'
  img.heigh = '27'
  img.alt = linkText
  const span = document.createElement('span')
  span.classList.add('visually-hidden')
  span.innerHTML = linkText
  linktag.innerHTML = ''
  linktag.prepend(span)
  linktag.prepend(img)

  console.log(block)
}