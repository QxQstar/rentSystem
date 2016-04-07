function addLoadEvent(func){
	var oldWindow = window.onload;
	if(typeof oldWindow != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldWindow();
			func();
		};
	}
}
// function addBackground(){
// 	var findH = document.getElementById('findH');
// 	var findR = document.getElementById('findR');
// 	findH.onclick = function(){
// 		findR.className = 'col-md-6';
// 		findH.className = 'col-md-6 active';
// 	};
// 	findR.onclick = function(){
// 		findH.className = 'col-md-6';
// 		findR.className = 'col-md-6 active';
		
// 	};
// }
// addLoadEvent(addBackground);
function getIssueImage(){
	var docObj = document.getElementById("exampleInputIssueImage");
	var reset = document.getElementById('reset');
	docObj.onchange = function(){
		// var notice = document.getElementById('notice');
		// alert(notice.firstChild.nodeValue);

		var imgObjPreview=document.getElementById("preview");
		if(docObj.files &&docObj.files[0])
		{
		//火狐下，直接设img属性
		imgObjPreview.style.display = 'block';
		imgObjPreview.style.width = '200px';
		imgObjPreview.style.height = '152px'; 
		//imgObjPreview.src = docObj.files[0].getAsDataURL();
		//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
		imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
		}
		else
		{
		//IE下，使用滤镜
		docObj.select();
		var imgSrc = document.selection.createRange().text;
		var localImagId = document.getElementById("localImag");
		//必须设置初始大小
		localImagId.style.width = "200px";
		localImagId.style.height = "152px";
		//图片异常的捕捉，防止用户修改后缀来伪造图片
		try{
		localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
		}
		catch(e)
		{
		alert("您上传的图片格式不正确，请重新选择!");
		return false;
		}
		imgObjPreview.style.display = 'none';
		document.selection.empty();
		}
		return true;
		};
		reset.onclick = function(){
			var imgObjPreview=document.getElementById("preview");
			imgObjPreview.style.display = 'none';
		};
	}
addLoadEvent(getIssueImage);