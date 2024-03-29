var natural = require('natural');
var wordnet = new natural.WordNet();

walk(document.body);

function generate_synonym(word){

try{
wordnet.lookup(word, function(results) {
    var appropriate_words=[]; 
    if(results.length != 0){
    results.forEach(function(result){
        var synonyms_list = result.synonyms;
        for(var i=0; i<synonyms_list.length; i++){

            if(!analyze_word(synonyms_list[i])){
                appropriate_words.push(synonyms_list[i]);
            }

        }

    });
console.log(appropriate_words);

}else{
    console.log('no synonyms for' + word);
}
});
}catch(err){
    console.log(err.message);
}
}
/*
* This function tells us the number of syllables in a word when called 
* 
*/
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
    if(analyze_word(v)){
    
    for (i = 0; i < word_list.length; i++) { 
        
        var synonym = generate_synonym(v);
        synonym = synonym[0];
        v = v.replace(v, synonym);
        textNode.nodeValue = v;
    }    
    }
    
    
}

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
        complex = true;
    }else{
        complex = false;
    }
    return complex;
}

function analyze_word(word){
    var word_syllables = new_count(word);
    var word_complexity = word_complex(word_syllables);
    return word_complexity;
}



