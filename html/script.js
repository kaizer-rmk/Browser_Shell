function exchange(){

	var xhr = new XMLHttpRequest();

	var get = document.getElementById('inp').value

	xhr.open("GET", "http://192.168.43.42/cgi-bin/js_ws.py?cmd="+get,true);
	xhr.send()
	
	xhr.onload = function(){
		//Output from above url
		var out = xhr.responseText;
		console.log(out)
		document.getElementById('output').innerHTML=out;
		removeAtt()
		promptBox()
	}
}

function removeAtt(){
	document.getElementById('inp').removeAttribute('id')
	document.getElementById('output').removeAttribute('id')
	document.getElementById('myButton').remove()
}

function monitor(){
	document.getElementById("inp")
    .addEventListener("keyup", function(event) {
	event.preventDefault();
	if (window.preventDuplicateKeyPresses)
            return;

        window.preventDuplicateKeyPresses = true;
        window.setTimeout(function() { window.preventDuplicateKeyPresses = false; }, 500 );

    if (event.key === "Enter" && !event.shiftKey) {
			console.log(event.key);
        document.getElementById("myButton").click();
    }
});
}

function clear(){
	
}

function promptBox(){

    var shell = document.createElement('div')

	var cmdw = document.createElement('div')

    var label = document.createElement("label")
	label.setAttribute('id', "labl")
    label.innerHTML="[ root@192.168.43.42 ~ ]"+"# &nbsp"

    var cmdInput = document.createElement('input')
    cmdInput.setAttribute('type','text')
    cmdInput.setAttribute('name','cmd')
    cmdInput.setAttribute('id','inp')
	cmdInput.setAttribute('class','inp')
	cmdInput.setAttribute('onkeydown','monitor()')
    cmdInput.setAttribute('autofocus','autofocus')

    var submit = document.createElement('button')
    submit.setAttribute('onclick',"exchange()")
    submit.setAttribute('id',"myButton")
	submit.innerHTML="Submit"

    cmdw.appendChild(label)
    cmdw.appendChild(cmdInput)
    cmdw.appendChild(submit)

	var out = document.createElement('pre')

	var result = document.createElement('div')
	result.setAttribute('id','output')
	result.setAttribute('class','output')
	
	out.appendChild(result)

    shell.appendChild(cmdw)
	shell.appendChild(out)


	//Final 
	document.querySelector('#root').appendChild(shell)

}

