function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof oldLoad != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldLoad();
			func();
		};
	}
}


function addOutline(){
	var row = document.getElementById('rowA');
	var reA = row.getElementsByTagName('a');
	//var len = reA.length;
	for(var i = 0;i < reA.length;i++){
		reA[i].onclick = function(){
			oldStyle = this.getAttribute('style');
			alert(oldStyle);
			// alert(reA.length);
		};
	}
}
addLoadEvent(addOutline);
// function outline(j){
// 	reA[1].setAttribute('style','outline-top:#E33434 solid 2px');
// }