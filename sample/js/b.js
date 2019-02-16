var xhr = new XMLHttpRequest()
xhr.open('GET', '/node-server/getName', true)
xhr.send()
xhr.onload = function(){
	console.log(JSON.parse(xhr.responseText))
}
