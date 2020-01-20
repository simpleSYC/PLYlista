	var set=0;
	var URLvid = "https://www.youtube.com/embed/nBjXgqIFicE?autoplay=1";
	var defaltBonus = "./WKUP.ogg"
	var myDEY;
	var d0=Number;
	var d1=Number;
	var d2=Number;
	var d3=Number;
	var d4=Number;
	var d5=Number;
	var d6=Number;
	var d7=Number;
	
	var HAPPYarrya=[];
	
	var R1n100;
	
	var THE_CHOUSEN_ONE="";
	
	function setv()
	{
		salm();
		var hr2= document.getElementById('hour2').value;
		var min2= document.getElementById('min2').value;
		var sec2= document.getElementById('sec2').value;
		if(hr2<10)
			hr2='0'+hr2;
		if(min2<10)
			min2='0'+min2;
		if(sec2<10)
			sec2='0'+sec2;
		document.getElementById('d2').value=hr2+'*'+min2+'*'+sec2;
	




		set=1;/////////////ova bese 1
//		document.getElementById('msg').innerHTML='Alarm ON';
//		document.getElementById('db').style.visibility="visible";
//		document.getElementById('alm').style.visibility="hidden";
	}
	function dis()
	{
		
		
		var dat= new Date();
		
		myDEY = dat.getDay();
		
			
if((myDEY==1&d1==1)||(myDEY==2&d2==1)||(myDEY==3&d3==1)||(myDEY==4&d4==1)||(myDEY==5&d5==1)||(myDEY==6&d6==1)||(myDEY==7&d7==1))	
{
	if(document.getElementById('msgQ2').innerHTML!=""){document.getElementById('msgQ2').innerHTML="";}

}else{ 	if(document.getElementById('swico').checked==true){
	if(document.getElementById('msgQ2').innerHTML!="not alarm today*"){document.getElementById('msgQ2').innerHTML="not alarm today*";}
			}else{if(document.getElementById('msgQ2').innerHTML!=""){document.getElementById('msgQ2').innerHTML="";}}
}

		
		
		
		var hr=dat.getHours();
		var min=dat.getMinutes();
		var sec=dat.getSeconds();
		if(hr<10)
			hr='0'+hr;
		if(min<10)
			min='0'+min;
		if(sec<10)
			sec='0'+sec;
		document.getElementById('hour').value=hr;
		document.getElementById('min').value=min;
		document.getElementById('sec').value=sec;
		var dat2v=document.getElementById('d2').value;
		var dats =hr+'*'+min+'*'+sec;
		if(dat2v==dats && set)
			{
		alarmotFINISIRAN();		
	//			document.getElementById('alm').play();
//				document.getElementById('sb').style.visibility="visible";
				//alert("Wake Up Man!");
				set=0;
				document.getElementById('db').style.visibility="hidden";
//				document.getElementById('msg').innerHTML='Alarm RINGING';
			}
		setTimeout("dis()",500);
	}
	function prtsel(x)
	{
		for(var i=0;i<x;i++)
		{
			if(i<10)
			{
				document.write("<option value="+i+">"+0+i+"</option>");
			}
			else 
			{
				document.write("<option value="+i+">"+i+"</option>");
			}
		}
	}
	function salm()
	{
		document.getElementById('alm').pause();
//		document.getElementById('sb').style.visibility="hidden";
//		document.getElementById('msg').innerHTML='Alarm OFF';
	}
	function dalm()
	{
		set=0;
//		document.getElementById('db').style.visibility="hidden";
	//	document.getElementById('msg').innerHTML='Alarm is OFF';
	}
	
	
	
	
	//////////////////////////////////////////////// moe proizvotstvo
	
	function alarmCHEK (){
		if(document.getElementById("swico").checked == true){alarmGO();}else{alarmSTOP();};
		

	}
	
	function alarmGO (){
		document.getElementById('msgQ').innerHTML="alarmot aktiviran";
		setv();
				
	}
		
	
	
	function alarmSTOP (){
				document.getElementById('msgQ').innerHTML="alarmot OFF";
				salm();
				dalm();
		document.getElementById("swico").checked =false;
	}
	
	function alarmotFINISIRAN(){
		//da se prikazee toa

OPENmodelTMgo();

		
		
	}
	
	function CloseFiniSOT(){
		
		
		
		document.getElementById('aleTO').style.display="block";
		
		document.getElementById('BX').style.display="none";
		
		alarmSTOP();
	}
	
function OPENmodelTMgo() {
	
document.getElementById("akcijaTM").style.height =screen.height+"px";

		document.getElementById('aleTO').style.display="none";
		document.getElementById('BX').style.display="block";
		
		
   document.getElementById("myModalTm").style.display = "block";
  
//document.getElementById("akcijaTM").appendChild(document.getElementById("1pv1"));

(document.getElementById("1pv1")).src=THE_CHOUSEN_ONE;
   
   
(document.getElementById("1pv1")).play();
}

function CloseFiniSOT() {
   document.getElementById("myModalTm").style.display = "none";
  
		document.getElementById('aleTO').style.display="block";
		document.getElementById('BX').style.display="none";	
//(document.getElementById("1pv1")).remove();
/////////////////////(document.getElementById("1pv1")).src="";

(document.getElementById("1pv1")).pause();
}

var LIVEselectTAB=false;

var VoARIJAA;

function OPENmodelMM() {
	if(LIVEselectTAB == false){
                         
                                                                                daSEloadneDATATA();						 
   
document.getElementById("MMselec").style.height =screen.height+"px";
document.getElementById("myModalMM").style.display = "block";
	
	LIVEselectTAB=true;
	
	}else{if(LIVEselectTAB){		
		document.getElementById("myModalMM").style.display = "none";	
		LIVEselectTAB=false;
       
																					setTENOVI();
document.getElementById("MQW").innerHTML=VoARIJAA[2];

	   }
				
 }
}

function OPENmodel() {
  document.getElementById("myModal").style.display = "block";
  
  


var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demoDEY").innerHTML = days[d.getDay()];


var Mbr = new Date();
document.getElementById("demoDne").innerHTML = Mbr.getDate();



var Mname = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demoNAME").innerHTML = months[Mname.getMonth()];

}

  

 function CLOSEmodal() {
  document.getElementById("myModal").style.display = "none";
}
function CHANGETO(){
	if(document.getElementById("swico").checked == true){alarmSTOP();}
	alarmCHEK();
}	
function ckDEYS(){clikDEY1();clikDEY2();clikDEY3();clikDEY4();clikDEY5();clikDEY6();clikDEY7();sumeSPANKO();}
function sumeSPANKO(){d0=d1+d2+d3+d4+d5+d6+d7;document.getElementById("DEYselectos").innerHTML =d0;}	
	function clikDEY1 (){if(document.getElementById("dy1").checked == true){d1 =1}else{d1 =0}}
	function clikDEY2 (){if(document.getElementById("dy2").checked == true){d2 =1}else{d2 =0}}
	function clikDEY3 (){if(document.getElementById("dy3").checked == true){d3 =1}else{d3 =0}}
	function clikDEY4 (){if(document.getElementById("dy4").checked == true){d4 =1}else{d4 =0}}
	function clikDEY5 (){if(document.getElementById("dy5").checked == true){d5 =1}else{d5 =0}}
	function clikDEY6 (){if(document.getElementById("dy6").checked == true){d6 =1}else{d6 =0}}
	function clikDEY7 (){if(document.getElementById("dy7").checked == true){d7 =1}else{d7 =0}}
	
	

function setTENOVI (){
daSEloadneDATATA();	

Tn_1=VoARIJAA[0];
Tn_2=VoARIJAA[1];
Tn_3=VoARIJAA[2];
Tn_4=VoARIJAA[3];
Tn_5=VoARIJAA[4];
Tn_6=VoARIJAA[5];
Tn_7=VoARIJAA[6];
Tn_8=VoARIJAA[7];
Tn_9=VoARIJAA[8];
Tn_10=VoARIJAA[9];
Tn_11=VoARIJAA[10];
Tn_12=VoARIJAA[11];
Tn_13=VoARIJAA[12];


CREATEariyata();

}

var Tn_1_TXTurl="https://www.youtube.com/watch?v=uD6Qzt1vjGM";
var Tn_2_TXTurl="https://www.youtube.com/watch?v=GQIqKuDaCig";
var Tn_3_TXTurl="https://www.youtube.com/watch?v=Y5M6YKR7wUw";
var Tn_4_TXTurl="https://www.youtube.com/watch?v=";
var Tn_5_TXTurl="https://www.youtube.com/watch?v=5555555";
var Tn_6_TXTurl="https://www.youtube.com/watch?v=666666666";
var Tn_7_TXTurl="https://www.youtube.com/watch?v=";
var Tn_8_TXTurl="https://www.youtube.com/watch?v=";
var Tn_9_TXTurl="https://www.youtube.com/watch?v=";
var Tn_10_TXTurl="https://www.youtube.com/watch?v=";
var Tn_11_TXTurl="https://www.youtube.com/watch?v=";
var Tn_12_TXTurl="https://www.youtube.com/watch?v=";
var Tn_13_TXTurl="https://www.youtube.com/watch?v=";
var Tn_14_TXTurl="https://www.youtube.com/watch?v=";
var Tn_15_TXTurl="https://www.youtube.com/watch?v=";

var Tn_1=null;
var Tn_2=null;
var Tn_3=null;
var Tn_4=null;
var Tn_5=null;
var Tn_6=null;
var Tn_7=null;
var Tn_8=null;
var Tn_9=null;
var Tn_10=null;
var Tn_11=null;
var Tn_12=null;
var Tn_13=null;
var Tn_14=null;
var Tn_15=null;

var URL_Txt="";

	
function CREATEariyata(){
	
	HAPPYarrya=[];
	if (Tn_1){HAPPYarrya.push(Tn_1_TXTurl)}
	if (Tn_2){HAPPYarrya.push(Tn_2_TXTurl)}
	if (Tn_3){HAPPYarrya.push(Tn_3_TXTurl)}
	if (Tn_4){HAPPYarrya.push(Tn_4_TXTurl)}
	if (Tn_5){HAPPYarrya.push(Tn_5_TXTurl)}
	if (Tn_6){HAPPYarrya.push(Tn_6_TXTurl)}
	if (Tn_7){HAPPYarrya.push(Tn_7_TXTurl)}
	if (Tn_8){HAPPYarrya.push(Tn_8_TXTurl)}
	if (Tn_9){HAPPYarrya.push(Tn_9_TXTurl)}
	if (Tn_10){HAPPYarrya.push(Tn_10_TXTurl)}
	if (Tn_11){HAPPYarrya.push(Tn_11_TXTurl)}
	if (Tn_12){HAPPYarrya.push(Tn_12_TXTurl)}
	if (Tn_13){HAPPYarrya.push(Tn_13_TXTurl)}
	
	R1n100 =Math.floor(Math.random() * HAPPYarrya.length);
	 
	THE_CHOUSEN_ONE=HAPPYarrya[R1n100].toString();	
}	
	
	
	
	
	function daSEloadneDATATA(){
		
		      VoARIJAA= JSON.parse(localStorage.getItem("BKniza"));
	}
	
	
	
	
