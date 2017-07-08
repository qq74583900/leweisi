<?php
	//字符编码使用utf-8;
	header("Content-type:text/html;charset=utf-8");
	//1、接收客户端的输入的数据
	$name = $_POST['username'];
	$pass = $_POST['password'];
	$Phone = $_POST['phone'];
	$Id = $_POST['userid'];
	$IdName = $_POST['idname'];
	
	//2、保存到数据库
	//1）、连接数据库
	//echo $IdName;
	$con = mysql_connect("localhost","root","123");
	if(!$con){
		//die("连接失败".mysql.error());
		echo "注册失败:服务器连接有问题".mysql.error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("zhuce",$con);
		$str="insert into userTable(username,userPassword,phone,userid,idname) values('".$name."','".$pass."','".$Phone."','".$Id."','".$IdName."')";
		
		$count = mysql_query($str,$con);
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应
		if($count==1){
		  	header("refresh:2;url=../../index.html");
			print('正在登陆，请稍等');
		}else{
			echo "注册失败";
		}
//	   echo "<a href='#'>登录</a>" ;
	}
?>