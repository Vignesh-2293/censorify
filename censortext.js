var censoredwords=["bad","sad","mad"]
var customcensorwords=[];
function censor(text)
{
	for(index in censoredwords)
	{
		text=text.replace(censoredwords[index],"****")
	}
	for(index in customcensorwords)
	{
		text=text.replace(customcensorwords[index],"****")
	}
	return text;
}
function getCensoredWords()
{
	return censoredwords.concat(customcensorwords)
}
function addCensoredWords(word)
{
	customcensorwords.push(word)
}
exports.censor=censor;
exports.getCensoredWords=getCensoredWords;
exports.addCensoredWords=addCensoredWords;