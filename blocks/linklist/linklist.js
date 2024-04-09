/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  console.log(block)
  function convertMarkup(htmlBlock) {

    // Get all the li elements
    var listItems = htmlBlock.querySelectorAll('.linklist li');

    // Loop over the li elements
    listItems.forEach(function(li) {
        // Get the text content of the li, excluding the link
        var text = li.childNodes[0].nodeValue.trim();

        // Remove the existing text node
        li.childNodes[0].remove();

        // Create a new h4 element
        var h4 = document.createElement('h4');

        // Set the text content of the h4
        h4.textContent = text;

        // Insert the h4 at the start of the li
        li.prepend(h4);
    });

    return htmlBlock;
  }
  block = convertMarkup(block)

  if (block.querySelectorAll('li').length === 3) {
    const wrap = document.createElement('div')
    wrap.classList.add('two-column-wrap')
    const section = block.closest('.linklist-container')
    const defaults = section.querySelector('.default-content-wrapper')
    const defaulstHtml = section.querySelector('.default-content-wrapper').outerHTML
    const col = section.querySelector('.linklist-wrapper')
    const colHtml = section.querySelector('.linklist-wrapper').innerHTML
    const contentToWrap = `${defaulstHtml}${colHtml}`
    wrap.innerHTML = contentToWrap
    section.insertBefore(wrap, defaults)

    section.dataset.sectionStatus = 'loaded'
    section.removeAttribute('style')
    defaults.remove()
    col.remove()
    // section.classList.remove('loading')
    // section.classList.remove('loaded')
    // section.removeAttribute('style')
    // section.querySelector('.default-content-wrapper:nth-child(2)').innerHTML = ''
    // section.querySelector('.linklist-wrapper:nth-child(3)').innerHTML = ''
  }

}