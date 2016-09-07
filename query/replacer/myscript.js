
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

// walk(document.body);
 tester();
//caller();

/*
* Basically an intiallizer. Code inside this method is called above and used to call methods.
*/
function caller(){

	var x = new_count('hashmi'); //Calls the method word_count 
	var y = word_complex(x); //Calls the method word_complex
	console.log(y); //Prints to the browser console. 
}

/*
* This function(s) needs to do the following:
* 1. get the number of syllables in the word
* 2. determine if the word is complex
* 3. if complex, replace with synonym (assume we have a synonym) 
*/ 
function replace_word(word_analyzed){
	var syllables = new_count(word_analyzed);
	var complex = word_complex(syllables);
	if (complex) {
		var synonym = 'easy';
		return synonym;
	} else {
		return word_analyzed;
	}
}

/*
* This function "walks" or traverses through all the words on the page by looking at 
* each node and the children of the nodes to obtain the text on the page.
*/
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

/*
* Ignore this function. It's just here as a reference.
*/
function handleText(textNode) 
{

	var v = textNode.nodeValue;
	var word_list = ['Etymology'];
	
	var c = document.body.innerHTML;
	console.log(c)
	
	for (i = 0; i < word_list.length; i++) { 
		// console.log(word_list[i])
		var synonym = replace_word(word_list[i])
		v = v.replace(word_list[i], synonym);
		textNode.nodeValue = v;
	}
}

/*
* This function gets all the text on the page and can replace it with another word
* Right now the function adds the words to an array and prints the length giving
* the number of words on the page.
*/
function tester(){
	var word_list=[]; //array intialization
		var all = document.body.getElementsByTagName("*"); //gets all the tags on the page
	for (var i=0, max=all.length; i < max; i++) { //iterates through all the tags
  		// console.log(all[i].nodeValue);
  		word_list.push(all[i].nodeValue); //adds the words to an array
  		for(var j = 0, max2 = all[i].childNodes.length; j < max2; j++) { //iterates through the tags of the children
    		// console.log(all[i].childNodes[j].nodeValue);
    		word_list.push(all[i].childNodes[j].nodeValue); //adds those words to the array
  		}
	}

	console.log(word_list.length); //prints the number of words in the array
	// for (var k=0; k < word_list.length; k++){
	// console.log(word_list[k]);	
	// }
}

/*
* This function makes our API calls. All we do is pass in the url for the api.
*/
function httpGet(theUrl)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", theUrl, false);
	xhr.send();
	var x = xhr.responseText;
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(xhr.responseText, "application/xml");
	// console.log(xmlDoc);
	if( xmlDoc.getElementsByTagName("suggestion").length == 0 ) {
	 console.log('worked');
	 console.log(x);
	} else {
		console.log("didn't work");
		console.log(x);
	}
	// console.log(xhr.responseText)
	// console.log(xhr.status);
	// console.log(xhr.statusText);
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    // xmlHttp.send( null );
    // return xmlHttp.responseText;
}

/*
* This function tells us the number of syllables in a word when called 
* 
*/
function new_count(word) {
  word = word.toLowerCase();                                     //word.downcase!
  if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
  return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
}

/*
* This function returns true if the word complexity is greater or 
* equal to 3. Otherwise false if it is less than 3.
*/
function word_complex(complexity){
	var complex;
	if (complexity >= 3){
		complex = false;
	}else{
		complex = true;
	}
	return complex;
}

/*
* Ignore this function. 
* 
*/
function store_old_code(){
	// var x = httpGet('http://words.bighugelabs.com/api/2/d8ab7d606fcfe74a27f9dc072a5bc78c/word/json');
	// var word = 'disseminate';
	// var elementary_dictionary_api = 'http://www.dictionaryapi.com/api/v1/references/sd2/xml/' + word + '?key=a7cf95e7-6043-4374-8580-726a152fd156';
	// console.log(elementary_dictionary_api);
	// var x = httpGet(elementary_dictionary_api);
	// console.log(x);
	// x = x[0]
	// console.log(x);
}