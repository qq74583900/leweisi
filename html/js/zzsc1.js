

$(function(){
		//对话框弹出、隐藏
		$("#consult").click(function(){
			$("#service").show();
		});
		
		$("#quxiao").click(function(){
			$("#service").hide();
		});
		
		$(".service").click(function(){
			$("#service").show();
		});
		
		$(".quxiao").click(function(){
			$("#popu").hide();
		});
		$(".shaohou").click(function(){
			$("#popu").hide();
		});
		$(".jieshu").click(function(){
			$("#service").hide();
		});
		$(".play_video").click(function(){
			$("#video1").hide();
		});
	});  



//鼠标拖拽对话框
	window.onload=function(){
		let sevTalkBox=document.getElementById('service');
		sevTalkBox.onmousedown = function(event){
			let reX = event.offsetX;
			let reY = event.offsetY;
			document.onmousemove = function(event){
				sevTalkBox.style.left = event.clientX - reX +"px";
				sevTalkBox.style.top = event.clientY - reY + "px";
			}
		}
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}
	
	
	
	
	
// 定时弹窗
setTimeout(function(){//2秒后显示ʾ
    $("#popu").fadeIn();
}, 3000);
setTimeout(function(){//5秒后隐藏
    $("#popu").fadeOut();
}, 3000);








//返回顶部
  var scrolltotop={
	setting:{
		startline:100,
		scrollto:0, 
		scrollduration:400, 
		fadeduration:[500,100] 
	},
	controlHTML:'<img src="../images/gotop.png" style="width:54px; height:54px; border:0;" />', 
	controlattrs:{offsetx:30,offsety:80},
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"���ض���"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();
  
  
//验证码
	
	function changeyzm(){
		var i=0;
		var str="";
		while(i<4){
			var num1=parseInt(Math.random()*123);
			if((num1>=48 && num1<=57)||(num1>=65 && num1<=90)||(num1>=97 && num1<=122)){
				str+=String.fromCharCode(num1);
				i++;
			}
		}
		document.getElementById("showCode").innerHTML=str;	
	}

  
  
  
  
  