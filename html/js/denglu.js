$(function(){		
		$("#btnLogin").click(function(){
			//1、
			$.post(
				"login.php",
				{
					"userId":$("#userId").val(),
					"userPass":$("#userPass").val()
				},
				function(data){					
					if(data=="1"){//登录成功！
						//记录cookie
						saveCookie("userId",$("#userId").val(),7);
						location.href="index.html";
					}else{
						alert("登录失败，用户名或者密码不对！");
					}
				}
			);
		});
	});
	


function jumpTo(p,url){
	let customerId = sessionStorage.customerId;
	if (customerId == undefined){
		p.attr("href","../index.html");
		<span style="white-space:pre"></span>
	}else{
		p.attr("href",url);
	}
}
function infoJumpTo(){
	let $info = $("#info");
	jumpTo($info,"http://localhost/xiangmu/leweisi/index.html");
}
function starJumpTo(){
	let $star = $("star");
	jumpTo($star,"http://localhost/xiangmu/leweisi/html/zhuce.html");
}



function confirm(){ 
  var tel=$tel.val();//获取页面中登录名和密码 
  var pwd=$pwd.val(); 
  if(tel==""|| pwd==""){//判断两个均不为空（其他判断规则在其输入时已经判断） 
    alert("手机号密码均不能为空！") 
    return false; 
  }else{//以上均符合要求，则调用登录esb接口 
     $.ajax({ 
       url:config.baseServerUrl + '/account/login',//相对应的esb接口地址
       type:'post',  
       data:{mobile:tel,password:pwd},//向服务器（接口）传递的参数
       success:function(data){//服务器（接口）返回来的数据
         if(data.success){//如果返回来的信息说明提交的信息为正确的 
           var customerId = data.attr.customerInfo.id;//将数据中用户信息的ID赋值给变量 
           sessionStorage.customerId = customerId;//将变量存储到本地sessionStorage中，并且value为customerID 
           window.location.href='http://localhost/index.html';//正确登录后页面跳转至 
         } 
         else{//如果返回来的信息说明提供的信息为错误的 
           if(tel != data.tel){//判断是用户名还是密码错误，提示相应信息 
             alert(data.message); 
             $tel.val(""); 
             $pwd.val(""); 
             return false; 
            } 
            if(pwd != data.pwd){ 
             alert(data.message); 
             $pwd.val(""); 
             return false; 
            } 
         } 
       } 
    }) 
  } 
}



//判断是否敲击了Enter键 
$(document).keyup(function(event){ 
    if(event.keyCode ==13){ 
      $("#login").trigger("click"); 
    } 
});