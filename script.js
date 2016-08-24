document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
	var elements = documents.getElementsByTagName('*');

	for (var i=0; i< elements.length; i++){
		var element = elements[i]

		for (var j = 0; j < element.childNodes.length; j++){
			var node = element.childNodes[j];

			if(node.nodeType===3){
				var text = node.nodeValue;
				var replacedText = text.replace(/a/gi, 'HOLY');

				IF (replacedText !== text){
					element.replaceChild(document.createTextNode(replacedText), node)
				}
			}
		}
	}
	// console.log('baller');
	// alert('hey');
  /* ... */
}