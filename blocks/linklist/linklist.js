/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
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
}