
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
// tester();
// caller();


function caller(){

	// var x = httpGet('http://words.bighugelabs.com/api/2/d8ab7d606fcfe74a27f9dc072a5bc78c/word/json');
	// var word = 'disseminate';
	// var elementary_dictionary_api = 'http://www.dictionaryapi.com/api/v1/references/sd2/xml/' + word + '?key=a7cf95e7-6043-4374-8580-726a152fd156';
	// console.log(elementary_dictionary_api);
	// var x = httpGet(elementary_dictionary_api);
	// console.log(x);
	// x = x[0]
	// console.log(x);

	var x = new_count('hashmi');
	var y = word_complex(x);
	console.log(y);
}
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

	// var v = textNode.nodeValue;
	// var word_list = ['Etymology'];
	
	// var c = document.body.innerHTML;
	// console.log(c)

	
	// 	for (i = 0; i < word_list.length; i++) { 

	// 		// console.log(word_list[i])
	// 	v = v.replace(word_list[i], "aansh");
	// 	textNode.nodeValue = v;
	// }
}

function tester(){
	var word_list=[];
		var all = document.body.getElementsByTagName("*");
for (var i=0, max=all.length; i < max; i++) {
  // console.log(all[i].nodeValue);
  word_list.push(all[i].nodeValue);
  for(var j = 0, max2 = all[i].childNodes.length; j < max2; j++) {
    // console.log(all[i].childNodes[j].nodeValue);
    word_list.push(all[i].childNodes[j].nodeValue);
  }
}
console.log(word_list.length);
// for (var k=0; k < word_list.length; j++){
// console.log(word_list[k]);	
// }

}
function httpGet(theUrl)
{
	var xhr = new XMLHttpRequest();
xhr.open("GET", theUrl, false);
xhr.send();
var x = xhr.responseText;
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xhr.responseText, "application/xml");
// console.log(xmlDoc);
if( xmlDoc.getElementsByTagName("suggestion").length == 0 )
{
 console.log('worked');
 console.log(x);
}else{
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
function new_count(word) {
  word = word.toLowerCase();                                     //word.downcase!
  if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
  return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
}

function word_complex(complexity){
	var complex;
	if (complexity >= 3){
		complex = false;
	}else{
		complex = true;
	}
	return complex;
}