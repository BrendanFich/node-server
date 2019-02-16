var xhr = new XMLHttpRequest()
xhr.open('GET', '/sample/getName', true)
xhr.send()
xhr.onload = function(){
	console.log(JSON.parse(xhr.responseText))
}
