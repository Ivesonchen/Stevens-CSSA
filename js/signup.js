// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function isChinese(str) {
	var reg=/^[\u4E00-\u9FA5]{1,4}$/;   /*定义验证表达式*/
	return reg.test(str);     /*进行验证*/
}

function isEmail(str) {
	var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
	return reg.test(str);
}

function signup(){
	var text1 = "",text2 = "",text3 = "",text4 = "";
	var username = document.forms["signin_form"]["username"].value;
    var email = document.forms["signin_form"]["email"].value;
	var password = document.forms["signin_form"]["password"].value;
	
	if(username === null){
		text1 = "需要填写用户名   ";
	}else if(email === null){
		text2 = "需要填写邮箱   ";
	}else if(!isEmail(email)){
		text3 = "邮箱格式错误   ";
	}else{
		//经过简单验证 将JSON格式的数据传送给服务器
		text4 = "输入成功   ";
		var info = {"username":username,"email":email,"password":password};
		var info_json = JSON.stringify(info);
	}
	alert(text1 + text2 + text3 + text4);
}