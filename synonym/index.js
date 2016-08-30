var natural = require('natural');
var wordnet = new natural.WordNet();

wordnet.lookup('rejuvenate', function(results) {
	console.log(results[0].synonyms);
    // results.forEach(function(result) {
    //     console.log('------------------------------------');
    //     // console.log(result.synsetOffset);
    //     console.log(result.pos); //part of speech
    //     console.log(result.lemma); //lemma 
    //     console.log(result.synonyms); //synonym
    //     // console.log(result.pos); //part of speech
    //     console.log(result.gloss); //definition
    // });
});