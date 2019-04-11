
//---Online
var apipath="http://w02.yeapps.com/postit/syncmobile_20190410/";
//--- local
//var apipath="http://127.0.0.1:8000/postit/syncmobile/";

url ="";

$(document).ready(function(){
		$('#bufferImageSync').hide();	
		$(".errorChk").text('');
		url = "#pagesync";	
		$.mobile.navigate(url);
});



function syncBasic(){
	$("#bufferImageSelectTown").hide();
	$(".errorChk").html("");
	var mobile=$("#mobile").val();
	var password=$("#password").val();
	//alert(mobile+'===='+password);
	if (mobile=="" || password==""){
		$('#bufferImageSync').hide();
		$(".errorMsg").html("Required mobile no and password");	
		url = "#pagesync";
		$.mobile.navigate(url);
	}else{
		$('#bufferImageSync').show();	
		$('#syncBasicBtn').hide();	
		localStorage.synced="NO"		 
		$(".errorMsg").html("Sync in progress. Please wait...");
		if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			localStorage.sync_code=0;
		}	
	//alert(apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
		$.ajax({
		  url:apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
		  success: function(result) { 
			var syncResultArray = result.split('rdrd');
				localStorage.synced=syncResultArray[0];
				if (localStorage.synced=='YES'){
					
					$('#bufferImageSync').hide();	
					localStorage.synced="YES"
					url = "#homePage";
					$.mobile.navigate(url);											
				}else{
					$('#syncBasicBtn').show();
					url = "#pagesync";
					$.mobile.navigate(url);
					$(".errorMsg").html("Sync Failed. Authorization Error.");
									
				};				
		  },error:function(){
			  $('#syncBasicBtn').show();
			  $(".errorMsg").text("Please check internet connection");
			 }
		});//------/ajax			
	
	}//-----/field			
}

function syncValueClean(){
	$('#syncBasicBtn').show();
	url = "#pagesync";
	$.mobile.navigate(url);
	}
	
function menuClick(){
	
		url = "#homePage";
		$.mobile.navigate(url);
	
}
//----------------back button
function backClick(){
	
		
}
