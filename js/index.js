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
	// var row = document.getElementById('rowA');
	// var reA = row.getElementsByTagName('a');
	// //var len = reA.length;
	// for(var i = 0;i < reA.length;i++){
	// 	reA[i].onclick = function(){
	// 		oldStyle = this.getAttribute('style');
	// 		alert(oldStyle);
	// 		// alert(reA.length);
	// 	};
	// }
	var recomm1 = document.getElementById('recomm1');
	var recomm2 = document.getElementById('recomm2');
	recomm1.onclick = function(){
		recomm1.className = 'reA active';
		recomm2.className = 'reA';
	};
	recomm2.onclick = function(){
		recomm2.className = 'reA active';
		recomm1.className = 'reA';
	};
}
addLoadEvent(addOutline);