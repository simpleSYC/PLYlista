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
	
	var RANDseeke;
	
    var LIVEselectTAB=false;

    var VoARIJAA;

	
	var HAPPYarrya=[];
	
	var R1n100;
	
	var THE_CHOUSEN_ONE="";
	
	
	var testoTXT="";
	
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
				testoTXT="ooooooooooooooooonnnnadeno";
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
//(document.getElementById("2pv2")).src="./QQ/tst.html"	 
//document.getElementById("2pv2").style.height =screen.height+"px";
//document.getElementById("modalCC-contentCC").style.height =screen.height+"px";
document.getElementById("akcijaTM").style.height =screen.height+"px";

	document.getElementById('aleTO').style.display="none";
	document.getElementById('BX').style.display="block";
		
   document.getElementById("myModalTm").style.display = "block";
  
//document.getElementById("akcijaTM").appendChild(document.getElementById("1pv1"));

(document.getElementById("1pv1")).src=THE_CHOUSEN_ONE;
   
   	setCurTime();
   
////////////////(document.getElementById("1pv1")).play();
}

///////////////
function ONLOADedDATA(){
	
	
}


////////////////////




function CloseFiniSOT() {
   document.getElementById("myModalTm").style.display = "none";
  
		document.getElementById('aleTO').style.display="block";
		document.getElementById('BX').style.display="none";	
//(document.getElementById("1pv1")).remove();
/////////////////////(document.getElementById("1pv1")).src="";

///////////////(document.getElementById("1pv1")).pause();
(document.getElementById("1pv1")).src="";
//(document.getElementById("2pv2")).src="./QQ/tst.html"
}

function OPENmodelMM() {
	if(LIVEselectTAB == false){       
      //                                                         daSEloadneDATATA();						 
   
			document.getElementById("MMselec").style.height =screen.height+"px";
			document.getElementById("myModalMM").style.display = "block";
	
			LIVEselectTAB=true;
	
	}else{if(LIVEselectTAB){		
		document.getElementById("myModalMM").style.display = "none";	
		LIVEselectTAB=false;
																	setTENOVI();	
	   
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

//https://public.bn.files.1drv.com/y4mQ8cNtmrDD28zr2z5AmJ3_ll2XsSQmcUDwmle5mOeGYaBMVeT-BRnja7im5MeUUOkN4yqJTfgvmN3Ok6r4FdT8NCnCrgTM7sWWawgpKKS7j35EWTr8rL2QaxCwzsrG1vk-N_ToXJfgB_PRz8iMxVRywThgTOjRbPnIauxUXJXWlaAe0kEaOzc36t2GRRPOYXsAAUQjlYzi8MlQmvhW1X9H7yX_N6arum-cUX16lGhK08?
/// #!! https://qyip7w.bn.files.1drv.com/y4muSvHFzXDwupXlKSYvQEOOQKn4WpVUm9KMl5AbjUeqy68uYI2843jS8IPS-9u3N9swQBaQc0YrYR1jRkfoC0QMuzJD_LZHLotwqmK7nMLTfR4PjD7Y_F87TbwCDTC9s20UtBKq9AXMcgTUZoDkU2QMCcEhXWoJltGVXQejlMYIumOYhqCJbUuQK8vI-bWdQU3BTRKAw5CCOWIaPUTDNHAXVyrn9T4J4vN1nWCYjswFfQ/JP%20Irving%20092919.mp3

/// #26!! https://qyip7w.bn.files.1drv.com/y4mCybOnVVw3ePQG4or-mvKnUXQwQnC9ZBolgft_CdHi4rUJAB7vIenzB-hrXddWcXOQP6cTshIXrOZM_k7yLvxzXsiEmo_fHjsaZKtTcif0AxpOOgV89l-k9SD4mmlkQBa8C7Dbyb6jux7vbad9YfGK95KqGSBTRLJT87Yz9vzOIRKcbkLmydZt-0PsYWeDy3FeJTGR-p2NCzUuAYXlVokRXNQjSt9J9P6-1wLicoNDBI/26_-_The_Phenomenology_of_the_Divine.m4a

// 1  https://qyip7w.bn.files.1drv.com/y4mpr-NsO6KVQgUDCDVu_QUz57qwKS-vTBYEyPkzM0ZEuhV19Vukj_rKRlXdBtTbOCglmh02hwhSZoi2HBMW1nseh3sQyt3PQzuJNHLANxZlZ_bGBRi93mrlGPNoziPsu99MrUuEkliPqq6y4SXjtay5fhnKkqv7OWUuOLa6VM6j_KK551BIZkP4z4VBnGbr_1xPjoO35IPg8hWaEPv9hsIAccVFvFYe43BJaN9zw1QyT8/JP%20EP%201C.mp3
 
/// 3 https://qyip7w.bn.files.1drv.com/y4m-T7UrYkM3291AiqjPrVpKjPlkerrni8XQwqNpN_XxrpL4_dVVjNg6CUTmyDkMETz8OC57uzw3S6QSUFfkYG2sW9oKW0rxZP-V1KyP4pMpInHsGwi-nOED2B0ppQi1gszqWWj_2yFcYYIX1yrZ9NdEIlDanOCkC01B2U81ANp0-cFc8SxrQpYZPGnZuDAuqUdb1aiC_c78t8_ed0wEWDfHv9UDR895VBtc5eoWP4Zq9k/JP%20EP%203%20040719%20Portland.mp3

/// 5 https://qyip7w.bn.files.1drv.com/y4muualDsrA8S3iDWX6jb38Q0SyY2hs6_BVw15veVpxI7t01ge50k4Pj5IAsHitrX-YnVp6_qCgvoExJsT2g9Icb_xNPl0syi-4Ag28mvmJpi1vlphYxeOnc_obNbOKsQ4pkaFErv-KMOspFZfgwTF6f6n6K4FOfQzJ8rTAAGJOfg7g71oRjKtVxhs6eoLB7q0repG-oSzWQO6wGZt-qp1W0vBmpuDVghdL8UCs2ohbEI0/JP%20EP%205%20Sacramento%20042119.mp3

/// 6 https://qyip7w.bn.files.1drv.com/y4mfRFL3R5T9dq2CzThFm_xkI62WBp1m_nGg1Bws8OYgRAeQ3UNYgwnX-KPJNJW6d26Dae4PdcR7EIpB_QIlB0bhtQ9B6FB-lHD-91xJnXkEY3N5YU_zF5NvNegwSiTtNzxGOONPFcbRjzTS3YeEYCajthd3MmYDs_6ooGQvp-zCLFU77XqsXOx0SfcJi2D_45xIQiKPinKVft4V9RGtfmQwcAH0rAw30a_H7XI_kgr4RU/JP%20EP%206%20Thousand%20Oaks%20042819.mp3

/// 7 https://qyip7w.bn.files.1drv.com/y4ml2HSrTU1Rhs2-kGrBx20Q5w_f3cBmyaMF44pJyuvha5KlSJV4jRV38XCKMwubWUn026SNTVF3ub-qKIrNOhd9DoTUma42CXA8lLCUaHGvgr-3fxc-i2Vi_06hDwcj9nN3axmr-XmETBZAq2E3P-Rs4n5eDhvIQYQWWIxhLm2WIWBZrwHvbNl-5_m5AFgKKyyJ5OkEOPyZhI4H5zslHy6QNY3QoU5JHEZgKeWqDq-eZI/JP%20EP%207%20050519%20Stephen%20Hicks.mp3

/// 8 https://qyip7w.bn.files.1drv.com/y4mH_NqQlOJYXWTH7IlUvKMILeQqQI-OlqdTpvc_IdIbpzCRljk1u8Uyonuh3TAumVda3ypjKBl9V6MkD88Kk9wMSyEihHE1GZ0pnK0MftkuJJNhIxfdskZdVvJtZROI49Tm4gd9A4_zspzo8YoukThuRAjpsQGifXiriS-5_sf8WG57tFkKGWJCQooNUAHUA4f5_FBhq4HIpsiWAOZvD8EBoZrnHrkzJQQHDwAGfKB_ek/JP%20EP%208%20051219B%20Hamilton%20Ontario.mp3?

// 10 https://qyip7w.bn.files.1drv.com/y4mb8vUNyedD2dObhdhUT6DEnXvYdBzAm2YFhCzsIsH8JBmfOLtq7h8fPpVbqLNUXV3D2NQez7ynssvVzJZhAZPPnqx1c4nzGZVNlOkPQUeg6GAcoBYnAZF5EtF69szV21iYawQ9sTlOjTLhdPqwY7BXFWrpkFvmS2WSu0fvCvfvC3K9_cv0pSMjHlEPkJ86srnQ2eQXehGicyHZQkV6l4czoF3zZqb7OigyNxa6fb2WaY/JP%20Ep%2010%20052619%20Vancouver.mp3

/// 13  https://qyip7w.bn.files.1drv.com/y4mxNXZMwt1rHmVP0lQyj2nS7g6mcYru7yOlOzwJLyYABNP-YH8rVR8dyDQ3mQoV6-9gbymo4GIv9DXfJmWUfGyY47QyKHRQYN_pZbVVIevdQKMM1nEpaZgffKTM2FvvQrCCCzWiT0XlR-JYS5TwKhlp0S9TuHlIB5kZ0G2rPge0X0Iaq1cWKkwvFhg6W95Y_rpnpZDjTH3AJfoKKGgUeZjlcGySDiv8o7yY5snNcO3vkw/JP%20EP%2013%20061619%20Kitchener%20%20Mixdown%202.mp3

/// 23  https://qyip7w.bn.files.1drv.com/y4meY3cQH4b_MGltvAXsHoh4XmY3EHfKGaUZK2iJqG3sqYxDhlOQDSTntOkziwEhjLtaMPLzTvIeqQqygeT7rCrXOzC_MWAs_jr_KMgDodEl0pq4cZXwOtBC2yU2xEElLs7k2cJBRgWKCCBx2U4FWGYbPoMqrU9GVLDBXv2P3yp4Vh9JvBAdJ0ZOPZaiqodk7NtIB4dsOiIl8A3v2mgijE_FQXWIDwDorKlx9N9Tds63H4/JP%20Ep%2023%20082519%20072818%20Edmonton%20AB%20Mixdown%201.mp3

/// 24 https://qyip7w.bn.files.1drv.com/y4mufvB_n_1OADFbHglCb5e8cD5EuPVxFrPFFH2be13KiCQtDj3i0FNaZj6jP1J4v6_BvEFpJV0A46vwchWdT0ctd2LiNKy7EAESf0iO6OuInjlDYlwsgOpv4A-3Uvo0bvrejN--abCfFOEYiiHYlwWlqNdlI6DFf4Ve0DJNdudeaGGnXKDcapJC5rMMC5qvFHum7WB86lF9c70JodRxIT_oeLa-9SzfVuno1yoQQyo22k/JP%20Ep%2024%20Winnipeg%20MA%20090119.mp3

/// 26 https://qyip7w.bn.files.1drv.com/y4m6nP8JW4OjTagsfxZ3BiZXTTbIqydfzo3wrKUu4-ooOOJMVwxb5UoUVNeGXkmBYjB-RsyUYU2lOKmmsWI30PF7tCsI97wDZUEavwzR9VWrHadgGwLOxKFPYbeqTJxwwqzWPpam9LgrA6zLvYff64ku6HZHArj8R38H2z7MNGOQDmwIRSFQ_VvwnQAIzkE0cemWwRv91WDz0_PmvT-SfBtzyoRgfuFGtysH4NlU1Si2QU/JP%20EP%2026%20091519%20090518%20Rochester%20NY.mp3

/// 27 https://qyip7w.bn.files.1drv.com/y4mTOOwSlMF8dTLlWKxAmfiSKJx2WRbch1eLzW_OMPeiH5-sEp-39OZ3WdjS7gpJ5KRBMcUg99GQdlWe7bkCpGvB3cGN-X-LBnWY-45t6iHoJiWFSPGwSLxeCb5XQH0xRdfBFCHX_SRq7ZHKozphDZ3baXIe7IaYvBPFWubcUWTaAuL0S-sy46IcI3hdrrc1XBp0a31ZljJs7Zx3MYoko3T8-NR2yhUbVMJh6I-COwXxBs/JP%20EP%2027%20Westbury%20092219B.mp3

/// 29 https://qyip7w.bn.files.1drv.com/y4m2K695LrfzfH881-UVf7rxoPZJI3Cy1TyRrxgQu2JMmzhPwrxhI5kv-2EyAnLwbz7hGrPfI8HF9WBnrPWTs1X3WZemhCpR_lxWrCA4SpsThZjPfnmjTFUpnZHlKB46VWJAPuql7SOi9Spjlqg_vgT5qQ3QVuybqWrj9Kxs0XQQ2LV-ri-n8p8bpdr3q5U12NJ84eZ9u9FJO6QiUeAd_9wTTW-DOPzaKgNTauP7Whelk0/JP%20EP%2029%20100619_01revised.mp3

/// 30 https://qyip7w.bn.files.1drv.com/y4mFeBG7B3Um7mKArFZ5JIk4_FkZUsD_VZfMJYIwNj5s-Q0tWfECUqtZeBmrEbNMSkoLazYJvWV-Ck6FEghjowkmeR3dcbyQ-bb6yIdVt3s-sZXJQIIlf0wD1xBk9X1bcvEEoGpSWBHB8Zzc0ZOw-TUak5dbHmXInUiFYxD82BE7X4MTvWwUmW5jczckEajR0vU0ilCgsVaQ3rwD4XXGxJSfJ-jwFj3olNbJa_4q6lRF6k/JP%20EP%2030%20101319.mp3

/// 32 https://qyip7w.bn.files.1drv.com/y4mlqTw6d7bHIk--0XRxcChSLAMn_LkloFtLi6JQNIu7PoT8ILov2rKEd1X6GRlqs8TLX5U6YdkJPiOQXI--nzONsj-NlU4fi2ngdiO3oiQrBKXszwZdGdahC9xng06S4GF1DG8mTE712qNt5KuQ7tYIoFwK0or646wXvtHhEcRUlXH_LoWWKN70OBtbdGyh-N01dsA1Em7oX_8oL3cqlaTr6j_nojSQ-bCrLmrgKBdeFE/JP%20EP%2032%20102719%20%20The%20Topic%20of%20Truth.mp3

/// 33 https://qyip7w.bn.files.1drv.com/y4msZ0qSSkXAsZO-29bVrACsAJXPFzSpUgjVYwwpUbq2f0fUEo98y9GRes9s7qG99x6MlX-rWBlaWbw7A46SG3Y2FXOSFaY5DbGVYYhFd0l-YuHWK1iLGhfwwAc3qlwpFoVhsWEiQutaZaJCKo5_r7BAX0ePkFbuHsBZkKOyaUM3Xc2pJxikcqcXNFX76y41k85wRdHmbag1A7IUTCVzMr1pYNvXtBUIrLTBhaQp52X3Ls/JP%20Ep%2033%20Cambridge%20UK%20110319.mp3

//// 34 https://qyip7w.bn.files.1drv.com/y4mkP29APlWbXyD1kYO2S3apkdzxQoRlhCKjjhB5qm-cY7bccf4xZGKE613oGo5GNkCeFMP1NzAMiFhkjvAGkyGljsKblSVYj-PchmwRZyWEUJsn2WignT0zPo2DKlxwgIpp63vhaU8f58euPwcE3obC8xsmeKtlEZ_xQTi73LWn1-J-B8X8sQCkCdMoB0q3X_ldW4FNJMU-jVRnQTslEzbgq4Z1_2ETnuSD9IiBmtLtII/JP%20EP%2034%20111019%20Birmingham%20UK.mp3

/// 35  https://qyip7w.bn.files.1drv.com/y4m27HDMasDP4y7qv6Ax-dRxDJXgmDeYF5FRX5LcxY9zjt0rbfrrABYba3ctnHHaR7DcdrePFaKh-xJH-vr8isVs0reIi-KO-IPqlyUhRmCo3cTTmdwGG41pqMLMGcFqctkTNJVmzmLgvFoOwvSyiVeEkERpdV1FOJinCvEAXWREYlLWL68cLDZ60hmNdfnSfuPb4REIK1FHqAx0eMq5beCygRRtezMvOalmvdWoGq24O4/JP%20EP%2035%20111719.mp3

/// 36 https://qyip7w.bn.files.1drv.com/y4mIiskM93eo7s2ilm7sc6bOzMxCEaEzCPqbT3JuJ7XK70QW6MYDBBz3m6eRRuuw1kljJGAzidw2ffE0cTua1NYcfBHMjuFPIew5mB9LD9u5aTJ61lMjQuHj-rD6TDxn8QbspB0Ry90FB2pWy1ZDUU8E4N-URR0Osp6YlVUsZyN49TAoU6mANAFi13K_pf1rlF88ARsbNOvFRtIHnsGsNwAapHG6FvAvnxNnNDN3tcpk4Q/JP%20EP%2036%20112419%20%20Value%20is%20bound%20by%20Limitation.mp3

/// 37 https://qyip7w.bn.files.1drv.com/y4m1PCgHg6pgj1gRI8kp45pJ6xSt68dHCZxywBpZqKA6ViLtjLCO_B0kZitRroS45LqteSIPw3TLNEhljHe4F9dH3bb51cy899rki4I5GOyEmpNYUPGkj97ktGUXEkXhHsFxrU_MsPqw8oI7BySmiqVR2T_8zp8aU38fmPXkJ_1UO-3LXfFuZpT9soU5v4_8hAbFFmK9vqNWReBewacqK10CgBAmGfpZPy7w-9t53r4-Wg/JP%20EP%2037%20120119%20The%20Struggle%20Between%20Chaos%20and%20Order_01.mp3

/// !!38 https://qyip7w.bn.files.1drv.com/y4mx4WxQ_SgcQUEDkioeG8jXiUz_XQvHmVKlNyOmInvcORT9hJSGPIGvvfc_VhucaLcDlD-SUK5Tr2RMvFulf0GAiZC7vmlk2gAuKslTs2yMU0d0OEzDFjGmSBbRFYZnqAQyNpmM-CbGypnT_j0MYkSxMI7eSdmPJQaR2IP7dciFw_LCy6AIEK_-BwleGLUwIUuyBV9hTHGL8MpzN4KHbFSyhXtVPom86tt4AQasxS0GiY/38_-_Cathy_Newman_and_analysis_with_Geenstijl.m4a

/// 39 https://qyip7w.bn.files.1drv.com/y4mQtw70LuGCnVkaBM8eDEYSRuIwpiluzPp6Q575GXmN92Fv5OP-HpH_XprpKdrhf4BLbojmDg8Sa773YqnmpS-7YBUFHlrHgRXnNIYF8tnF2ZPTbgd0UgoX2t-zX89OP6_eHSKdiFAR8DuaOT1hyyWYoYlkrrXpdKj1aomWr8xJS5tikAZttTkuxLfYip_Zxk6BYI06rH4pA5xd8U-C-klBJV_96LRiKC1MjhoqfdZv7Q/JP%20EP%2039%20121519%20012419%20Riverside%20%20%20Mixdown%201.mp3

/// 40 https://qyip7w.bn.files.1drv.com/y4mDbmdDeXegeEnTAyGx3qPTvdWYQWw4Zbwe1kQ1IwZxqnFCZqa4BYZQ7gxm9uezva8cygLenCPcI1trHTGOcCalOc9x5DyQud9c7_eUJkTi35neeDzyGt89TcJ0gAbEtUbZXHaqkINRRbl_WkeoeJHJAk64du2ygtP36SVGz20f9LJe_vKtoudcF0ZSzl5t2p5ORNUaApFxwgbkysM7a8TM6SWEnbaieFpMa1m-c2YGdA/JP%20Ep%2040%20Beyond%20Order%20012519%20122219%20Another%2012%20Rules%20for%20Life.mp3


/// 41 https://qyip7w.bn.files.1drv.com/y4mfvnWVSRoMWWYyL5GSfV07aXSLdwqGF7iT7mcalpVrF7MsWm2oyojxSo2I94Vf_4VfT701Bmdsx-zGoavLzcTDJnOP1FwScUqh-IOTDV0Ypc_EhjBRQPVcrEvP5MN7gUbIa0DsKkiBmxJHpZwLwss9uQWLHzRIliVL1G0qAX7PMlKE7OGQXEaRTcSg6FwwyWCYtiHvmxtRZHtWdzEbcYpiz7NyJ7PUrtwDJFsPnsInPg/JP%20Ep%2041%20Defense%20Against%20ideological%20Possession.mp3


/// 42 https://qyip7w.bn.files.1drv.com/y4m5fEmGgfUwExwj8N6MrNck1oC8KWb4n75cgBHQtGeOrGPQbzSJ0hAW4kxxupLxmIbfQybWqLgv_KkXz2ufbeXFa17NuKA24awH7hfzpQB-qGtOP3dXDNxYlY_dg0TXvNjDUyFgX0K5V0XcvljBe2VU4YNWQYRtGrpMNatZmdQq6EDaByItrVLEtTsMmjoYcGY1hxaaaVc5BYjaryJsC48PhvN1Z7xlEWo3T3aNMLUZOM/JP%20EP%2042%20011920%20Mixdown%201.mp3

///

/// 48 https://qyip7w.bn.files.1drv.com/y4mJHkTmeXpC0aFE3-TAwo4LNwMkiEmnRf2qrYfbi2-B4ILbI-8G6fgWGIBpVsN54JEh_n4iB2L4-PZ9v65DsNspXSwY6YaOLj7fokbcy4c4tkxoZrpqr6ocnWbTfGMDP2gsuEtZfg2IEs9YuzS2b5cBDYKOEk9donkrCKl8gwqYhza_QvGRTSABqBfaiBKZc37geu9iw0UrnizcsYGA5__RTO5I7QOrFn_n54aFxPRkwk/JP%20EP%204B%20Akira%20the%20Don%20041419%20Mastered%20Final.mp3

 

var MYurl="./JBP/";

var Tn_1_TXTurl="./WKUP.ogg";

var Tn_2_TXTurl="./sounds/emotional-intelligence.mp3";

var Tn_3_TXTurl="http://www.actualizedfiles.com/audio/main_videos/2cb-trip-report.mp3";

var Tn_4_TXTurl="https://qyip7w.bn.files.1drv.com/y4muualDsrA8S3iDWX6jb38Q0SyY2hs6_BVw15veVpxI7t01ge50k4Pj5IAsHitrX-YnVp6_qCgvoExJsT2g9Icb_xNPl0syi-4Ag28mvmJpi1vlphYxeOnc_obNbOKsQ4pkaFErv-KMOspFZfgwTF6f6n6K4FOfQzJ8rTAAGJOfg7g71oRjKtVxhs6eoLB7q0repG-oSzWQO6wGZt-qp1W0vBmpuDVghdL8UCs2ohbEI0/JP%20EP%205%20Sacramento%20042119.mp3";
var Tn_5_TXTurl="https://content.production.cdn.art19.com/validation=1579689711,7a441930-62d7-5ad2-be3f-4e5dff68711b,e6H_Dia53mE8SdRo_ZMs5oehn6A/episodes/8ad8c3ec-0c64-459b-b1cc-7ef8e1125acb/b47126484c836b47ace80540c0c98006b755d50fad2fdfcda6cbc4e2ad621da31ef1ea2dfe33aedc9d36db20d8a9b0b23d8f07843f8be9f3f715b8695b381c6e/JP%20EP%2042%20011920%20Mixdown%201.mp3";
var Tn_6_TXTurl="https://qyip7w.bn.files.1drv.com/y4ml2HSrTU1Rhs2-kGrBx20Q5w_f3cBmyaMF44pJyuvha5KlSJV4jRV38XCKMwubWUn026SNTVF3ub-qKIrNOhd9DoTUma42CXA8lLCUaHGvgr-3fxc-i2Vi_06hDwcj9nN3axmr-XmETBZAq2E3P-Rs4n5eDhvIQYQWWIxhLm2WIWBZrwHvbNl-5_m5AFgKKyyJ5OkEOPyZhI4H5zslHy6QNY3QoU5JHEZgKeWqDq-eZI/JP%20EP%207%20050519%20Stephen%20Hicks.mp3";
var Tn_7_TXTurl="https://www.youtube.com/watch?v=";
var Tn_8_TXTurl="https://www.youtube.com/watch?v=";
var Tn_9_TXTurl="https://www.youtube.com/watch?v=";
var Tn_10_TXTurl="https://www.youtube.com/embed/nBjXgqIFicE?autoplay=1";
var Tn_11_TXTurl="https://www.youtube.com/watch?v=";
var Tn_12_TXTurl="https://www.youtube.com/watch?v=";
var Tn_13_TXTurl="https://www.youtube.com/embed/VBQ1sE1Qwoc?autoplay=1";
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
	

	
function setCurTime() { 



	RANDseeke =(Math.floor(Math.random() * 2)+1);
	
	
  (document.getElementById("1pv1")).currentTime = RANDseeke*300;
  
   (document.getElementById("1pv1")).play();
} 

function SETINGSaudio(){
//	  (document.getElementById("1pv1")).
	
}
	
	function daSEloadneDATATA(){
		
		      VoARIJAA= JSON.parse(localStorage.getItem("BKniza"));
	}
	
	
	
	
