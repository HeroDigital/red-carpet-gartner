/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {

  // new elements
  const heroPictureContainerElement = document.createElement('div')
  heroPictureContainerElement.classList.add('hero-picture-container')
  const heroContentContainerElement = document.createElement('div')
  heroContentContainerElement.classList.add('hero-content-container')

  // existing elements
  const heroContainer = document.querySelector('.hero-container')
  const heroGridContainer = block.querySelector('.hero.block > div > div')
  const title = block.querySelector('h1')
  const picture = block.querySelector('picture')
  const subtitle = block.querySelector('h2')
  const cta = block.querySelector('.button-container .button')


  // remove contents of grid container and replace with new structure

  heroGridContainer.innerHTML = ''
  heroGridContainer.append(heroPictureContainerElement)
  heroGridContainer.append(heroContentContainerElement)

  heroPictureContainerElement.append(picture)
  heroContentContainerElement.append(title, subtitle, cta)

}