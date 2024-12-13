// JavaScript Document
datef();
setInterval(function(){datef()},1000);
function datef(){
	var dated=new Date().toLocaleDateString('zh-cn',{});
	var dateh=new Date().getHours();
	var datem=new Date().getMinutes();
	var dates=new Date().getSeconds();
	var date=`${dateh}`+':'+`${datem}`+':'+`${dates}`+"\n"+`${dated}`;
	var dateb=document.getElementById("date")
	dateb.innerHTML=date;
}