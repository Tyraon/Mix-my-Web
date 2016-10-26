var aliste=[];
$("document").ready(function(){
	look.boRad('#main','10');
	look.gradBg('#main','#f1f1f1','#555555');
	look.gradBg('#dec1','#999999','#555555');
	look.boRad('#dec1','7');
	look.gradBg('#dec2','#999999','#555555');
	look.boRad('#dec2','7');
	look.gradBg('#master','#999999','#555555');
	look.boRad('#master','7');
	look.gradBg('#fx','#999999','#555555');
	look.boRad('#fx','7');
	look.gradBg('#playlist','#999999','#555555');
	look.boRad('#playlist','7');
	look.gradBg('#jingles','#999999','#555555');
	look.boRad('#jingles','7');
	look.glas('#contr','#cccccc');
	look.glas('#jmenu','#cccccc');
	look.boRad('#prefs','10');
	look.gradBg('#prefs','#f1f1f1','#555555');
	look.gradBg('#micro','#999999','#555555');
	look.boRad('#micro','7');
	look.gradBg('#automate','#999999','#555555');
	look.boRad('#automate','7');
	look.boRad('.pref_win','10');
	look.gradBg('.pref_win','#f1f1f1','#555555');
	look.boRad('.pref_cfg','7');
	look.glas('.track','#cccccc');
	look.boRad('.track','5');
	look.glas('.current','#3355cc');
	look.boRad('.current','5');
	look.glas('.pointer','#223377');
	look.boRad('.pointer','5');
	look.boRad('.rangebg','5');
	look.boRad('.rangeview','5');
	look.glas('.rangeview','#cccccc');
	look.boRad('.time','5');
	look.glas('.time','#cccccc');
	look.boRad('.rangebg2','5');
	look.glas('button','#999999');
	look.boRad('button','5');



	//Deckvolume
	$('#vold1').on('mousemove', function(){
		$('#rv1').html($('#vold1').val() + ' %');
		volume();
	});

	$('#vold2').on('mousemove', function(){
		$('#rv2').html($('#vold2').val() + ' %');
		volume();
	});

	
	//speed
	$('#speed1').on('mousemove', function(){
		var speed1 = (($('#speed1').val()-50)/50)+1;
		speed1 = speed1 < 1 ? (($('#speed1').val()-50)/100)+1 : speed1;
		speed1 = Math.round(speed1*100)/100;
		$('#sv1').html('X ' + speed1);
		$('#pl1').prop('playbackRate',speed1);
	});

	$('#speed2').on('mousemove', function(){
		var speed2 = (($('#speed2').val()-50)/50)+1;
		speed2 = speed2 < 1 ? (($('#speed2').val()-50)/100)+1 : speed2;
		speed2 = Math.round(speed2*100)/100;
		$('#sv2').html('X ' + speed2);
		$('#pl2').prop('playbackRate',speed2);
	});
	
	
	//playercontrol
	$('#pp1').click(function(){
			$('#pp1').html()=='1' ? play() : pause();
			function play(){
				$('#pl1')[0].play();
				$('#pp1').html(2);
			}
			function pause(){
				$('#pl1')[0].pause();
				$('#pp1').html(1);
			}
			$('#pp1').blur();
	});

	$('#pp2').click(function(){
			$('#pp2').html()=='1' ? play() : pause();
			function play(){
				$('#pl2')[0].play();
				$('#pp2').html(2);
			}
			function pause(){
				$('#pl2')[0].pause();
				$('#pp2').html(1);
			}
			$('#pp2').blur();
	});

	$('#cue1').on('mousedown', function(){
		cueDown(1);
	});

	
	$('#cue1').on('mouseup', function(){
		cueUp(1);
	});

	$('#cue2').on('mousedown', function(){
		cueDown(2);
	});

	
	$('#cue2').on('mouseup', function(){
		cueUp(2);
	});
	
	$('#point1').click(function(){
		cuePointer(1)
	});
	
	$('#point2').click(function(){
		cuePointer(2)
	});

	
	//seek
	$('#curr1').click(function(e){
		var x = e.pageX - $('#curr1').offset().left;
		var x = (x/375)*100;
		var songX = ($('#pl1').prop('duration')*x)/100;
		$('#pl1').prop('currentTime',songX);
	});

	$('#curr2').click(function(e){
		var x = e.pageX - $('#curr2').offset().left;
		var x = (x/375)*100;
		var songX = ($('#pl2').prop('duration')*x)/100;
		$('#pl2').prop('currentTime',songX);
	});

	
	//master
	var volm;
	
	$('#voldm').on('mousemove', function(){
		$('#rvm').html($('#voldm').val() + ' %');
		volm = $('#voldm').val();
		volume();
	});

	$('#tom').on('mousemove', function(){
		$('#tovm').html($('#tom').val() + ' %');
	});
	
	$('#talkover').on('mousedown', function(){
		talkoverDown();
	});
	
	$('#talkover').on('mouseup', function(){
		talkoverUp();
	});
	
	$('#mute').on('mousedown', function(){
		muteDown();
	});
	
	$('#mute').on('mouseup', function(){
		muteUp();
	});
	

	//FX
	$('#left').click(function(){
		//clearInterval(fade2);
		var fade_speed = $('#fadetime').val()*10;
		var fade1 = setInterval(function(){
		if($('#crossover').val()!=0) {
			$('#crossover').val(parseInt($('#crossover').val())-1);
			volume();
		} else{
		clearInterval(fade1);	
		}
		},fade_speed);
		$('#left').blur();
	});
	
	$('#right').click(function(){
		//clearInterval(fade1);
		var fade_speed = $('#fadetime').val()*10;
		var fade2 = setInterval(function(){
		if($('#crossover').val()!=100) {
			$('#crossover').val(parseInt($('#crossover').val())+1);
			volume();
		} else{
		clearInterval(fade2);	
		}
		},fade_speed);
		$('#right').blur();
	});
	
	$('#crossover').on('mousemove',function(){
		volume();
	});
	
	$('#deep').on('mousemove',function(){
		if($('#deep').focus()){
		frequency(0,1);}
	});

	$('#high').on('mousemove',function(){
		frequency(0,2);
	});
	
	$('#delay').click(function(){
		console.log('o');
		delayOn();
	});
	
	$('#mic_onoff').click(function(){
		$('#micropl')[0].paused ? micOn() : micOff();
		
		function micOn(){
			$('#micropl')[0].play();
			$('#mic_onoff').css({'color' : '#900'});
		}
		
		function micOff(){
			$('#micropl')[0].pause();
			$('#mic_onoff').css({'color' : '#000'});
		}
	});
	
	$('#volmic').on('mousemove', function(){
		$('#micropl').prop('volume',$('#volmic').val()/100);
	});
	
	var audj=0;
	$('#autodj').click(function(){
		audj == 0 ? autodjOn() : autodjOff();
	});
	

	//Playlist
	$('#add').click(function(){
		var llength = aliste.length;
		var nID = llength == 0 ? 0 : aliste[(llength-1)]+1;
		var count = aliste.push(nID);
//		console.log(aliste);
		var count = count-1;
		$('#liste').append('<div class="plist" id="div' + count + '"><input class="datei" id="f' + count + '" type="file"><button id="to1_' + count + '" onClick=selectDeck("1",' + count + ');this.blur();><</button><button id="to2_' + count + '" onClick=selectDeck("2",' + count + ');this.blur();>></button><span class="status" id="c' + count + '">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="cursor:hand; color:#555; text-shadow:0px 0px 1px #000;" onClick="delTrack(' + count + ');"><b>x</b></span></div>');
		$('#f' + count).click();
	});
	
	
	//Jingles
	var jingles=[];
	$('#addj').click(function(){
		$('#jingleselect').click();
	});
	
	$('#jingleselect').change(function(){
		var anz = $('#jingleselect').prop('files').length;
		for(var i = 0; i < anz; i++){
			var countj = jingles.push(1);
			var countj = countj-1;
			var files = $('#jingleselect').prop('files')[i];
			var file = URL.createObjectURL(files);
			var jpl = '<audio id="j' + countj + '" src="' + file + '"></audio><button onclick=playj(' + countj + ');>1</button><span class="plist">' + files.name + '</span><br />';
			$('#jplayer').append(jpl);
		}
	});
	
	$('#volj').on('mousemove', function(){
		var v = $('#volj').val()/100;
		$('#rvj').html((v*100) + ' %');
		for( var i = 0; i < jingles.length; i++){
			jvol(i,v);
		}
	});
	
	
	//bottom
	$('#settings').click(function(){
		$('#prefs').css({'visibility' : 'visible'});
	});
	
	
	//prefs
	$('#pref_close').click(function(){
		$('#prefs').css({'visibility' : 'hidden'});
	});
	
	$('#prefclock').change(function(){
		$('#prefclock').val()==1 ? clockOn() : clockOff();
		function clockOn(){
			$('#clock').css({'visibility' : 'visible'});
		}
		function clockOff(){
			$('#clock').css({'visibility' : 'hidden'});
		}
	});
	
	$('#sendmeta').change(function(){
		$('#sendmeta').val() == 1 ? sendOn() : sendOff();
		function sendOn(){
			writeMeta();
			alert('Der aktuelle Titel wird nun immer an den Streamserver gesendet!');
		}
		function sendOff(){
			//clearInterval(updateMeta);
		}
	});
	
	
	
	//functions
	//starts
	dura();
	init();
	track();
	clock();
	
	function init(){
		function checkBrowserName(name){  
		   var agent = navigator.userAgent.toLowerCase();  
		   if (agent.indexOf(name.toLowerCase())>-1) {  
			 return true;  
		   }  
		   return false;  
		 }  
		 if(checkBrowserName('MSIE')){  
		  context1 = new msAudioContext();  
		}  
		 if(checkBrowserName('safari')){  
		  context1 = new webkitAudioContext();  
		}  
		 if(checkBrowserName('chrome')){  
		  context1 = new webkitAudioContext();  
		} 
		 if(checkBrowserName('firefox')){  
		  context1 = new mozAudioContext();  
		}   
		 if(checkBrowserName('opera')){  
		  context1 = new oAudioContext();  
		}  
		source1 = context1.createMediaElementSource(document.getElementById('pl1'));
		filter1 = context1.createBiquadFilter();
		analyser1 = context1.createAnalyser();
		source1.connect(filter1);
		source1.connect(analyser1);
		frequencyData = new Uint8Array(analyser1.frequencyBinCount);
		filter1.connect(context1.destination);
		filter1.frequency.value = 10000;
		source2 = context1.createMediaElementSource(document.getElementById('pl2'));
		filter2 = context1.createBiquadFilter();
		source2.connect(filter2);
		filter2.connect(context1.destination);
		filter2.frequency.value = 10000;
		synthDelay = context1.createDelay(5.0);
		buffer = context1.createBuffer(2, 22050, 48000);
		source3 = context1.createMediaElementSource(document.getElementById('micropl'));
		filter3 = context1.createBiquadFilter();
		source3.connect(filter3);
		filter3.connect(context1.destination);
	}
	
		var buffers = [];
		var destination = context1.destination;
		var synthSource;
	
	
	var cuepoint=['',''];	
	function cuePointer(deck){
		if(cuepoint[deck-1]==''){
			var currTime = $('#pl' + deck).prop('currentTime');
			cuepoint[deck-1] = currTime;
			$('#point' + deck).css({'color' : '#900'});
		} else {
			cuepoint[deck-1] = '';
			$('#point' + deck).css({'color' : '#000'});
		}
	}
	
	function jvol(i,v){
		$('#j' + i).prop('volume',v);
	}

	function talkoverDown(){
		volm = $('#voldm').val();
		$('#voldm').val($('#tom').val());
		$('#rvm').html($('#tom').val() + ' %');
		volume();
	}

	function talkoverUp(){
		$('#voldm').val(volm);
		$('#rvm').html(volm + ' %');
		volume();
	}
	
	function muteDown(){
		volm = $('#voldm').val();
		$('#voldm').val(0);
		$('#rvm').html('0 %');
		volume();
	}
	
	function muteUp(){
		$('#voldm').val(volm);
		$('#rvm').html(volm + ' %');
		volume();		
	}
	
	function cueDown(deck){
		var cueX = cuepoint[deck-1] != '' ? cuepoint[deck-1] : 0.000;
		$('#pl' + deck).prop('currentTime',cueX);
		$('#pl' + deck)[0].play();
		$('#pp' + deck).html(2);
	}
	
	function cueUp(deck){
		var cueX = cuepoint[deck-1] != '' ? cuepoint[deck-1] : 0.000;
		$('#pl' + deck)[0].pause();
		$('#pp' + deck).html(1);
		$('#pl' + deck).prop('currentTime',cueX);
		$('#cue' + deck).blur();
	}
		
	function renderList(e1,e2){
		console.log(e1);
		return e1 + '<br />' + e2;
	}
	
	function volume(){
		var master = $('#voldm').val();
		var vol1 = $('#vold1').val();
		var vol2 = $('#vold2').val();
		var cf = crossfade();
		var new1 = (cf[0]*(master*vol1)/100)/10000;
		var new2 = (cf[1]*(master*vol2)/100)/10000;
		$('#pl1').prop('volume',new1);
		$('#pl2').prop('volume',new2);
	}
		
	function track(){
		var titel1 = $("#source1").attr('src').substr(4);
		var titel2 = $("#source2").attr('src').substr(4);
		$("#titel1").html(titel1);
		$("#titel2").html(titel2);
	}
	
	function trck(deck,titel){
		$('#titel' + deck).html(titel);
		console.log(deck,titel);
	}
	
	function autodjOn(){
		var num = 0;
		$('#autodj').css({'color' : '#900'});
		audj=1;
		function change(){
			var deck = $('#pl1')[0].paused ? 1 : 2;
			$('#to' + deck + '_' + aliste[num]).click();
			$('#pl' + deck).prop('src').onloadend = playIt(deck);
			//setTimeout(playIt(deck),200);
			var fading = deck == 1 ? '#left' : '#right';
			$(fading).click();
			if($('#autodel').val()=="1"){
				$('#div' + aliste[num]).remove();
			}
//			console.log(num);
			num++;
			clearInterval(checkChange);
			var waittime = ($('#fadetime').val()*1000)+1000;
			if(num<aliste.length){
				setTimeout(wait(deck),waittime);
			}
		}
		
		function playIt(deck){
			$('#pp' + deck).click();
		}
		
		function wait(deck){
			checkChange = setInterval(function(){
				if(audj==1){
					$('#pl' + deck).prop('currentTime') < ($('#pl' + deck).prop('duration')-$('#fadetime').val()) ? '' :
					change();
				} else{
					clearInterval(checkChange);
				}
			},100);
		}
		wait();
	}
	
	function autodjOff(){
		$('#autodj').css({'color' : '#000'});
		audj=0;
		num = 0;
	}
	
	function dura(){
		setInterval(function(){
			var breite;
			if($('#pp1').html()=='2'){
				checkTime(1);
			if($('#est1').val()==0){$('#pp1').click();}
			}
			if($('#pp2').html()=='2'){
				checkTime(2);
			if($('#est2').val()==0){$('#pp2').click();}
			}
		},100);
		setInterval(function(){
			if($('#pp1').html()=='2'){
				setPointer(1);
			}
			if($('#pp2').html()=='2'){
				setPointer(2);
			}
		},100);
	}
	
	function checkTime(deck){
		$('#akt' + deck).val(zeitForm($('#pl' + deck).prop('currentTime')));
		$('#est' + deck).val(zeitForm($('#pl' + deck).prop('duration')-$('#pl' + deck).prop('currentTime')));
		$('#sum' + deck).val(zeitForm($('#pl' + deck).prop('duration')));
	}
	
	function setPointer(deck){
		breite=($('#pl' + deck).prop('currentTime')/$('#pl' + deck).prop('duration'))*100;
		$('#poin' + deck).css({'width':breite + '%'});
	}
	
	function zeitForm(zeit){
		var minuten = Math.floor(Math.floor(zeit)/60);
		var sekunden = zeit-(minuten*60);
		var minuten = minuten < 10 ? '0' + minuten : minuten;
		var sekunden = sekunden < 10 ? '0' + sekunden : sekunden;
		return minuten + ':' + sekunden + '000';
	}
	
	function crossfade(){
		var vol1 = $('#crossover').val()>50 ? ((100-$('#crossover').val())*2) : 100 ;
		var vol2 = $('#crossover').val()<50 ? ($('#crossover').val()*2) : 100 ;
		return [vol1,vol2];
	}
	
	function frequency(pl,fr){
		if(fr==1){
			filter1.type = "highpass";
			filter1.frequency.value = 1000-($("#deep").val()*10);
			filter1.gain.value = 30;
			filter2.type = "highpass";
			filter2.frequency.value = 1000-($("#deep").val()*10);
			filter2.gain.value = 30;
			//console.log(filter1.frequency.value);
		}
		if(fr==2){
			filter1.type = "lowpass";
			filter1.frequency.value = $("#high").val()>1 ? $("#high").val()*100 : 100;
			filter1.gain.value = 30;
			filter2.type = "lowpass";
			filter2.frequency.value = $("#high").val()>1 ? $("#high").val()*100 : 100;
			filter2.gain.value = 30;
		}
		
	}
	
	var metaData;
	function writeMeta(){
		console.log('start');
		updateMeta = setInterval(function(){
			if($('#sendmeta').val()==1){
				var deck = $('#pl1')[0].paused ? '#titel2' : '#titel1';
				var currTitle = $(deck).html();
				console.log(currTitle);
				currTitle != metaData ? metasend() : '';
				function metasend(){
					metaData = currTitle.replace(/.mp3/gi,'').replace(/_/gi,' ');
					var metaServer = $('#meta_server').val();
					var metaHost = $('#meta_host').val();
					var metaPort = $('#meta_port').val();
					var metaUser = $('#meta_user').val();
					var metaPass = $('#meta_pass').val();
					var metaMount = $('#meta_mount').val();
					if(metaServer==1){
						var metaUrl = 'http://' + metaHost + ':' + metaPort + '/admin/metadata?mount=' + metaMount + '&user=' + metaUser + '&pass=' + metaPass + '&mode=updinfo&song=' + metaData;
					} else{
						var metaUrl = 'http://' + metaHost + ':' + metaPort + '/admin.cgi?pass=' + metaPass + '&mode=updinfo&song=' + metaData;
					}
					$('#meta_frame').attr('src',metaUrl);
					console.log('Daten' + metaData + 'gesendet an:' + metaUrl);
				}
			}
		},30000);
	}
	
	
	function tile(array,idx){
		console.log(idx);
		if(!idx%10){
			$('#v' + idx).css({width : array + 'px'});
			//console.log(idx);
		}
	}
	
	
	function clock(){
		setInterval(function(){
			var time = new Date();
			var stunde = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
			var minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
			var sekunde = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
			var zeit = stunde + ':' + minute + ':' + sekunde;
			$('#clock').html(zeit);
		},1000);
	}
	
	


	function forbidden(){
		alert('Die Taste ist gesperrt!');
	}
	

	//key-shortcut
	$(document).on('keydown',function(e){
		if($('#scuts').val()==1){
		switch (e.which){
			case 37:
			$('#left').click();
			break;

			case 39:
			$('#right').click();
			break;

			case 13:
			talkoverDown();
			break;

			case 17:
			forbidden();
			break;

			case 16:
			muteDown();
			break;

			case 81:
			$('#pp1').click();
			break;
			
			case 90:
			$('#pp2').click();
			break;

			case 87:
			cueDown(1);
			break;

			case 85:
			cueDown(2);
			break;
			
			case 69:
			$('#point1').click();
			break;

			case 73:
			$('#point2').click();
			break;
			
			case 27:
			$('#pref_close').click();
			break;

			case 77:
			$('#mic_onoff').click();
			break;

			case 88:
			$('#autodj').click();
			break;
		}
		}

	});

	$(document).on('keyup',function(e){
		if($('#scuts').val()=="1"){
		switch (e.which){
			case 13:
			talkoverUp();
			break;

			case 16:
			muteUp();
			break;

			case 87:
			cueUp(1);
			break;

			case 85:
			cueUp(2);
			break;
		}
		}
	});


//micro
function hasGetUserMedia() {
  // Note: Opera builds are unprefixed.
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
  navigator.getUserMedia({audio:true,video:false}, function(localMediaStream) {
	  var input = URL.createObjectURL(localMediaStream);
	  $('#micropl').prop('src',input);
	  $('#micropl')[0].pause();
  },function(){alert('Mikrofon kann nicht aktiviert werden!')});
} else {
  alert('getUserMedia() is not supported in your browser');
}
	
});

	function selectDeck(deck,file){
		$('#c' + file).html('z');
		$('#c' + file).css({'color' : '#0c0', 'text-shadow' : '0px 0px 1px #000', 'margin-left' : '10px'});
		var files = $('#f' + file).prop('files')[0];
		var file = URL.createObjectURL(files)
		$('#pl' + deck).prop('src',file);
		//$('#pp' + deck).click();
		var titel = files.name;
		$('#titel' + deck).html(titel);
	}
	
	function playj(jplayer){
		$('#j' + jplayer)[0].play();
	}
	
	function delTrack(track){
		$('#div' + track).remove();
		var key = searchKey(track);
		aliste.splice(key,1);
	}

	function searchKey(value){
		for(var i = 0; i < aliste.length; i++){
			if(aliste[i]==value){
				return i;
			}
		}
	}