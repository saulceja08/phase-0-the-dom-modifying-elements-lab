// Write your code here!
//Remove <main> element from the html code
const removeMainElement = document.querySelector('main')
removeMainElement.remove();

//Add a new element <h1> to DOM (createElement and Append)
var newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = `Saul is the champion`
document.body.append(newHeader)

