<!DOCTYPE html>
<html lang="en">
<head>
	
	<meta charset="utf-8">
	
	
	
	
<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Josefin+Slab|Open+Sans+Condensed:300" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	
	
<link rel="stylesheet" type="text/css" href="CSS.css">
<script type="text/javascript" src="JS.js"></script>
</head>


<body onload="ckDEYS(),dis(),alarmCHEK();">


<button id="BX" class="BX" onclick="CloseFiniSOT();">X</button>

		


<table align="center" width="45%" id="aleTO">
	<tr>
		<td>
			<div id="BODYY" >
			<div class="main">
				
				<div class="name">
					<h2 align="right">readly+</h2>
				</div>
				
				<hr>
				
				<div class="headding">
					<div class="lefth">
						<h2 align="right">HOURS</h2>
					</div>
					<div class="centerh">
						<h2 align="right">MINUTES</h2>
					</div>
					<div class="righth">
						<h2 align="right">SECONDS</h2>
					</div>
				</div>
				<input type="hidden" id="d2" name="d2">
				<div class="clock">
					<div class="rightc" >
						
						<input type="text" readonly id="hour" name="hour" size="1" class="time"> 
					</div>
					<div class="centerc">
						
						<input type="text" readonly id="min" name="min" size="1" class="time"> 
					</div>
					<div class="leftc">
						<input type="text" readonly id="sec" name="sec" size="1" class="time">
					</div>
				</div>
				
				
				
				<div class="setalarm">
					<hr>
					<h2 align="right">SET ALARM</h2>
				</div>
				<hr>
				
				<div class="clock">
					<div class="leftc" >
						<select id="hour2" name="hour2" onchange="CHANGETO();">
							<option value="00">00</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="05">05</option>
							<option value="06">06</option>
							<option value="07">07</option>
							<option value="08">08</option>
							<option value="09">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							
							<!--
							<script type='text/javascript'>prtsel(25);</script>
							-->
						</select>
					</div>
					<div class="centerc">
						<select id="min2" name="min2" onchange="CHANGETO();" >
							<option value="00">00</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="05">05</option>
							<option value="06">06</option>
							<option value="07">07</option>
							<option value="08">08</option>
							<option value="09">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							<option value="24">24</option>
							<option value="25">25</option>
							<option value="26">26</option>
							<option value="27">27</option>
							<option value="28">28</option>
							<option value="29">29</option>
							<option value="30">30</option>
							<option value="31">31</option>
							<option value="32">32</option>
							<option value="33">33</option>
							<option value="34">34</option>
							<option value="35">35</option>
							<option value="36">36</option>
							<option value="37">37</option>
							<option value="38">38</option>
							<option value="39">39</option>
							<option value="40">40</option>
							<option value="41">41</option>
							<option value="42">42</option>
							<option value="43">43</option>
							<option value="44">44</option>
							<option value="45">45</option>
							<option value="46">46</option>
							<option value="47">47</option>
							<option value="48">48</option>
							<option value="49">49</option>
							<option value="50">50</option>
							<option value="51">51</option>
							<option value="52">52</option>
							<option value="53">53</option>
							<option value="54">54</option>
							<option value="55">55</option>
							<option value="56">56</option>
							<option value="57">57</option>
							<option value="58">58</option>
							<option value="59">59</option>
							
							<!---<script type='text/javascript'>prtsel(61);</script>--->
						</select>
					</div>
					<div class="rightc">
						<select id="sec2" name="sec2" onchange="CHANGETO();">
							<option value="00">00</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="05">05</option>
							<option value="06">06</option>
							<option value="07">07</option>
							<option value="08">08</option>
							<option value="09">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							<option value="24">24</option>
							<option value="25">25</option>
							<option value="26">26</option>
							<option value="27">27</option>
							<option value="28">28</option>
							<option value="29">29</option>
							<option value="30">30</option>
							<option value="31">31</option>
							<option value="32">32</option>
							<option value="33">33</option>
							<option value="34">34</option>
							<option value="35">35</option>
							<option value="36">36</option>
							<option value="37">37</option>
							<option value="38">38</option>
							<option value="39">39</option>
							<option value="40">40</option>
							<option value="41">41</option>
							<option value="42">42</option>
							<option value="43">43</option>
							<option value="44">44</option>
							<option value="45">45</option>
							<option value="46">46</option>
							<option value="47">47</option>
							<option value="48">48</option>
							<option value="49">49</option>
							<option value="50">50</option>
							<option value="51">51</option>
							<option value="52">52</option>
							<option value="53">53</option>
							<option value="54">54</option>
							<option value="55">55</option>
							<option value="56">56</option>
							<option value="57">57</option>
							<option value="58">58</option>
							<option value="59">59</option>
							
							<!---<script type='text/javascript'>prtsel(61);</script>--->
						</select>
					</div>
				</div>
				
				
				<audio id="alm" src="http://www.orangefreesounds.com/wp-content/uploads/2015/04/Loud-alarm-clock-sound.mp3" loop controls preload="auto">
					Your browser does not support the audio element.
				</audio>
				<script type='text/javascript'>document.getElementById('alm').style.visibility="hidden";</script>
				<div id="msg">							
<table>
  <tr>
    <th>
<label class="switch"  >
  <input id="swico"  type="checkbox"   onclick="alarmCHEK()">
  <span class="slider round" ></span>
</label>
	</th>
    
	
    <th>
	
	
	</th>
	
    <th>
	<span id="msgQ" >alarmot OFF </span>
	<p>	<span id="msgQ2" >sd</span></p>
	</th>
  </tr>
</table>


				</div>
				<div>
					<center>
						<input type="button" id="sb" name="sb" value="STOP" onclick="salm()">
					</center>
					<center>
						<input type="button" id="db" name="db" value="DISMISS" onclick="dalm()">
					</center>
				</div>
				<script type='text/javascript'>document.getElementById('sb').style.visibility="hidden";</script>
				<script type='text/javascript'>document.getElementById('db').style.visibility="hidden";</script>
			</div>
			</div>
		</td>
	</tr>
	
	
	
	

<!-- Trigger/Open The Modal -->
<div class="myBtnD"><button onclick="OPENmodel();">Set deys</button><a>(<span id="DEYselectos"></span> / 7)</div>
<div class="myBtnM"><a>(<span id="Mselectos"></span> )<button onclick="OPENmodelMM();">Set Motiv</button></div>
	
</table>


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" onclick="CLOSEmodal();" >&times;</span>
      <h2>set deys</h2>
    </div>
    <div class="modal-body">
	
<table>
  <tr>
    <td>Mondey</td>
    <td>
<label class="switch">
  <input type="checkbox" id="dy1" onclick="clikDEY1()" onchange="sumeSPANKO();">
  <span class="slider"></span>
</label></td>
    
  </tr>
  <tr>
    <td>Thysdey</td>
    <td>
<label class="switch">
  <input type="checkbox" id="dy2" onclick="clikDEY2()" onchange="sumeSPANKO();">
  <span class="slider"></span>
</label></td>
    
  </tr>
  <tr>
    <td>Wensdey</td>
    <td>
<label class="switch">
  <input type="checkbox" id="dy3" onclick="clikDEY3()" onchange="sumeSPANKO()">
  <span class="slider"></span>
</label></td>
    
  </tr>
  <tr>
    <td>Thursday</td>
    <td>
<label class="switch">
  <input type="checkbox" id="dy4" onclick="clikDEY4()" onchange="sumeSPANKO()">
  <span class="slider"></span>
</label></td>
    
  </tr>
  <tr>
    <td>frydey</td>
    <td>
<label class="switch">
  <input type="checkbox" id="dy5" onclick="clikDEY5()" onchange="sumeSPANKO()">
  <span class="slider"></span>
</label></td>
    
  </tr>
  <tr>
    <td>satyrday</td>
    <td>
<label class="switch">
  <input type="checkbox" id="dy6" onclick="clikDEY6()" onchange="sumeSPANKO()">
  <span class="slider"></span>
</label></td>
    
  </tr>
  <tr>
    <td>sunday</td>
    <td>
<label class="switch">
  <input type="checkbox"  id="dy7" onclick="clikDEY7()" >
  <span class="slider"></span>
</label></td>
    
  </tr>
</table>
	
	
    </div>
    <div class="modal-footer" align="center">
      <p>today : <a id="demoDEY"></a> </p>
	  <p> <a id="demoDne"></a>	 <a id="demoNAME"></a>	</p>
    </div>
  </div>

</div>

	
	
	
	
<!-- The Modal -->
<div id="myModalTm" class="modalCC">

  <!-- Modal content -->
  <div  class="modalCC-contentCC" id="akcijaTM">

<audio id="1pv1"  >           
  <source src="https://content.production.cdn.art19.com/validation=1579689711,7a441930-62d7-5ad2-be3f-4e5dff68711b,e6H_Dia53mE8SdRo_ZMs5oehn6A/episodes/8ad8c3ec-0c64-459b-b1cc-7ef8e1125acb/b47126484c836b47ace80540c0c98006b755d50fad2fdfcda6cbc4e2ad621da31ef1ea2dfe33aedc9d36db20d8a9b0b23d8f07843f8be9f3f715b8695b381c6e/JP%20EP%2042%20011920%20Mixdown%201.mp3"  type="audio/mp3">
  
</audio>

<!--  

<iframe class="CLAS_muzika" id="1pv1" width="100%"    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>








<iframe class="CLAS_animacija" id="2pv2" width="100%"    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe id="1pv1" width="100%"  src="https://www.youtube.com/embed/IK2QFfiSclc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
 -->
  </div>

</div>
	
<!-- The Modal -->
<div id="myModalMM" class="modalMM">

  <!-- Modal content -->
  <div class="modalMM-contentMM" id="akcijaMM">
  

<iframe id="MMselec" width="100%"  src="https://simplesyc.github.io/PLYlista/v1.html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!--  
<iframe id="MMselec" width="100%" src="https://simplesyc.github.io/PLYlista/v1.html"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  -->
  </div>

</div>

</body>
</html>



