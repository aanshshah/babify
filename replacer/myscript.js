
/*
* 
* Tested the function on https://en.wikipedia.org/wiki/Pasta and works mildly well. 
* Need to implement lower case and uppercase versions of each word. 
* 
* Test case 1: change the words 'the', 'and', 'or'. Did not change all the words on the page 
* Test case 2: change the word 'pasta'. Did not change all the words on the page
* Test case 3: change the word 'Etymology'. Changed the 2/2 words on the page. 
*
*/

walk(document.body);

function walk(node)  
{
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	var word_list = ['Etymology'];

		for (i = 0; i < word_list.length; i++) { 
			// console.log(word_list[i])
		v = v.replace(word_list[i], "aansh");
		textNode.nodeValue = v;
	}
}

