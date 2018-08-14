var imagePathA='';
var imagePathB='';
var imageName='';
var imageName2='';

var select_town='';
var townCode='';
var townName='';
var posmCode='';
var a_qty='';
var routeName='';
var outlet_code='';
var outlet_name='';

//Online
var apipath="http://w02.yeapps.com/merchandizing/syncmobile/";
//--- local
//var apipath="http://127.0.0.1:8000/merchandizing/syncmobile/";

url ="";

$(document).ready(function(){
	if (localStorage.synced!='YES'){
			 url = "#pagesync";						
	}else{
		if (localStorage.rep_type=='CM'){
			$("#btn_receive").hide();
			$("#townSelct").show();
			
			var townCName=localStorage.town.replace('|', '-');
			$('#townSelct').html(townCName)
			
			$('#routeList').empty();
			$('#routeList').append(localStorage.route).trigger('create');
			
			$('#outletList').empty();
			$('#outletList').append(localStorage.outletList).trigger('create');
			
			$('#posmCodeList').empty();
			$('#posmCodeList').append(localStorage.posmCode).trigger('create');
			
			url = "#first_page";	
		}else{
			$('#btn_receive').show();
			$('#townList').empty();
			$('#townList').append(localStorage.townStr).trigger('create');
			
			$('#posm_code').empty();
			$('#posm_code').append(localStorage.posmCode).trigger('create');
			
			$('#posmCodeList').empty();
			$('#posmCodeList').append(localStorage.posmCode).trigger('create');
			
			url = "#homePage";
		}
		
		}
	$.mobile.navigate(url);
	
});



function syncBasic(){
	var mobile=$("#mobile").val() ;
	var password=$("#password").val() ;
	
	if (mobile=="" || password==""){
		$(".errorMsg").html("Required mobile no and password");	
	}else{	
		$('#syncBasic').hide();			 
		$(".errorMsg").html("Sync in progress. Please wait...");
		if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			localStorage.sync_code=0;
		}
	
		//alert(apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
		$.ajax({
		  url:apipath+'user_check?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
		  success: function(result) {
			syncResult=result
			var syncResultArray = syncResult.split('rdrd');
				localStorage.synced=syncResultArray[0];
				if (localStorage.synced=='YES'){	
					localStorage.sync_code=syncResultArray[1];										
					localStorage.repID=syncResultArray[2];					
					localStorage.repName=syncResultArray[3];
					localStorage.mobileNo=syncResultArray[4];
					localStorage.town=syncResultArray[5];
					localStorage.rep_type=syncResultArray[6];	
					localStorage.route=syncResultArray[7];
					localStorage.posmCode=syncResultArray[8];
					
					var townlist=localStorage.town.split('fdfd');					
					
					var townStr='';
					for (i=0;i<townlist.length;i++){
						townLi=townlist[i].split('|');						
						townCode=townLi[0]
						townName=townLi[1]
						
						townStr+='<label for="'+townCode+'"><input type="radio" name="town_select"  id="'+townCode+'" value="'+townCode+'-'+townName+'">'+townCode+'-'+townName+'</label>'
					}
					localStorage.townStr=townStr;
					
																
					$(".errorMsg").html("Sync Successful");
					$('#syncBasic').show();
										
					if (localStorage.rep_type=='CM'){
						$("#btn_receive").hide();						
						$("#townSelct").show();
						
						var townCodeName=localStorage.town.replace('|', '-')					
						$("#townSelct").html(townCodeName);
						$('#routeList').empty();
						$('#routeList').append(localStorage.route).trigger('create');
						
						$('#posmCodeList').empty();
						$('#posmCodeList').append(localStorage.posmCode).trigger('create');
												
						url = "#first_page";
						$.mobile.navigate(url);		
						
					}else{						
						$("#btn_receive").show();
						
						$('#townList').empty();
						$('#townList').append(localStorage.townStr).trigger('create');
						
						$('#posm_code').empty();
						$('#posm_code').append(localStorage.posmCode).trigger('create');
						
						$('#posmCodeList').empty();
						$('#posmCodeList').append(localStorage.posmCode).trigger('create');
						
					
						url = "#homePage";
						$.mobile.navigate(url);	
					}
																					
				}else{						
					$(".errorMsg").html("Sync Failed. Authorization or Network Error.");
					$('#syncBasic').show();
				}				
		  }//----/success f
		});//------/ajax			
	}//-----/field			
}
	
function menuClick(){
	$(".errorChk").text("");
	$(".sucChk").text("");
	
	$("#btn_take_pic").show();
	$("#btn_ach_lat_long").show();
	
	url = "#homePage";
	$.mobile.navigate(url);
}
//----------------back button
function backClick(){
	$(".errorChk").text("");
	$(".sucChk").text("");
}

//---------
function townSelect(){	
	if($("#townList").find("input[name='town_select']:checked").length==0){
		$(".errorChk").text("Select Town");
	}else{
		localStorage.select_town=$("input[name='town_select']:checked").val();
		
		$("#townSelct").html("Town:		"+	localStorage.select_town);
		$('#townSelctRec').html("Town:		"+	localStorage.select_town);
		
		$(".errorChk").text("");			
		url="#first_page";					
		$.mobile.navigate(url);
	}
}


function receive(){
	
	$(".errorChk").text("");			
	url="#second_page";					
	$.mobile.navigate(url);	
}

function alloDetails(){
	var posmCode=$("#posmCode").val();
	//alert(apipath+"getAllData?&posmCode="+posmCode);
	$.ajax({
		type: 'POST',
		url:apipath+"getAllData?&posmCode="+posmCode,																																																											
		success: function(result) {	
			var resultArray = result.split('rdrd');
				recStatus=resultArray[0];
			if (recStatus=='Success'){	
				var posmType=resultArray[1];	
				var brand=resultArray[2];
				var a_qty=resultArray[3];	
				
				$("#posm_type").val(posmType);
				$("#brand").val(brand);
				$("#allocation").val(a_qty);
			}else{
				$(".errorChk").text("Please check internet connection");
			}
		}
	})
}


function submit_data_receive(){
	$("#btn_submit_receive").hide();
	var d = new Date();	
	var get_time=d.getTime();
	
	var posm_code=$("#posm_code").val();
	var posm_type=$("#posm_type").val();
	var brand=$("#brand").val();
	var allocation=$("#allocation").val();
	var received=$("#received").val();
	var recPhoto=$("#recPhoto").val();
	
	if(received=='' || received==0){
		$(".errorChk").text("Required Receive Qty");
		$("#btn_submit_receive").show();
	}else{
		
		if (imagePathA!=""){							
			$(".errorChk").text("Syncing photo ..");
			imageName = localStorage.mobileNo+"_"+get_time+".jpg";
			uploadPhotoRec(imagePathA, imageName);
		}
		
		//alert(apipath+"submitData_receive?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&select_town="+localStorage.select_town+"&posm_code="+posm_code+"&posm_type="+posm_type+"&brand="+brand+"&allocation="+allocation+"&received="+received+"&imageName="+imageName);	
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_receive?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&select_town="+localStorage.select_town+"&posm_code="+posm_code+"&posm_type="+posm_type+"&brand="+brand+"&allocation="+allocation+"&received="+received+"&imageName="+imageName,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#recPhoto").val("");	
					$("#received").val("");	
					$("#posm_code").val("");
					$("#posm_type").val("");
					$("#brand").val("");
					$("#allocation").val("");
					document.getElementById('myImageA').src = '';
									
					$(".sucChk").text('Successfully Submitted');
					$(".errorChk").text("");
					$("#btn_submit_receive").hide();
					setTimeout(function(){
						location.reload();
					},5000);				
				}else{		
					$(".errorChk").text("Please check internet connection");													
					$("#btn_submit_receive").show();
					
				}
				
			}//end result
		});//end ajax
	}
}


function getReceiveImage() { 
	navigator.camera.getPicture(onSuccessA, onFailA, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccessA(imageURI) {		
    var image = document.getElementById('myImageA');
    image.src = imageURI;
	imagePathA = imageURI;	
	$("#recPhoto").val(imagePathA);
	
}

function onFailA(message) {
	imagePathA="";
	$("#recPhoto").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoRec(imageURI, imageName) { 	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win,onfail,options);
}

function win(r) {	
	$(".errorChk").text('Image upload Successful.');
}

function onfail(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_submit_receive").show();
}

/*================usagepage3=================*/
function usages(Usages){
	if (localStorage.rep_type!='CM'){		
		//alert(apipath+"getRoute?&townCodeName="+localStorage.select_town);
		$.ajax({
			type: 'POST',
			url:apipath+"getRoute?&townCodeName="+localStorage.select_town,
																																																													
			success: function(result) {	
				var resultArray = result.split('rdrd');	
				//alert(resultArray[1]);
				if(resultArray[0]=='Success'){				
					localStorage.routeListSup=resultArray[1];
					
					$('#routeList').empty();
					$('#routeList').append(localStorage.routeListSup).trigger('create');
					
				}else{
					
				}
			}
		})
		$("#usagesBtnShow").html(Usages);
		$(".errorChk").text("");			
		url="#page3";					
		$.mobile.navigate(url);
	}else{	
		$("#usagesBtnShow").html(Usages);
		$(".errorChk").text("");			
		url="#page3";					
		$.mobile.navigate(url);
	}
}

/************************usage*page4********************/

function route(){	
	if($("#routeList").find("input[name='route_select']:checked").length==0){
		$(".errorChk").text("Select Route");
	}else{
		routeName=$("input[name='route_select']:checked").val();
		
		/*********if condition for sm orSup *************/
		//alert(apipath+"getOutlet?&routeName="+routeName+"&townCode="+localStorage.town);
		if (localStorage.rep_type =='CM'){
		$.ajax({
		type: 'POST',
		url:apipath+"getOutlet?&routeName="+routeName+"&townCode="+localStorage.town,
																																																												
		success: function(result) {	
			var syncResultArray = result.split('rdrd');	
			
			if(syncResultArray[0]=='Success'){				
				localStorage.outletList=syncResultArray[1];
								
				$('#outletList').empty();
				$('#outletList').append(localStorage.outletList).trigger('create');
				
			}
			
			}
		})
		}
		/*********else condition for Sup ** change only localStorage.town=selectTown***********/
		else{
			var selectTown=localStorage.select_town.replace('-','|');
			
			//alert (apipath+"getOutlet?&routeName="+routeName+"&townCode="+selectTown)
			$.ajax({
		type: 'POST',
		url:apipath+"getOutlet?&routeName="+routeName+"&townCode="+selectTown,
		
																																																												
		success: function(result) {	
			var syncResultArray = result.split('rdrd');	
			
			if(syncResultArray[0]=='Success'){				
				localStorage.outletList=syncResultArray[1];
								
				$('#outletList').empty();
				$('#outletList').append(localStorage.outletList).trigger('create');
				
			}
			
			}
		})
		}
		
	$("#routeSelect").html('Route		:		' + routeName);
	$("#routeSelectOutletP").html('Route		:		' + routeName);
	$(".errorChk").text("");			
	url="#page4";					
	$.mobile.navigate(url);	
		
	}
}

function outlet(){
	if($("#outletList").find("input[name='outlet_select']:checked").length==0){
		$(".errorChk").text("Select Outlet");
	}else{
		outletIDName=$("input[name='outlet_select']:checked").val();
		
		outletS=outletIDName.split('|');
		outlet_code=outletS[0]
		outlet_name=outletS[1]
		
		
		$("#outletSelect").html('Outlet		:	' + outlet_code+'-'+outlet_name);
		$(".errorChk").text("");			
		url="#page5";					
		$.mobile.navigate(url);
	}		
}
/*=======================usage page5============================*/


function submit_data_usages(){
	$("#btn_submit_usages").hide();
	var d = new Date();	
	var get_time=d.getTime();
		
	posmCode=$("#posmCode").val();
	a_qty=$("#qty").val();
	var usagesPhoto=$("#usagesPhoto").val();
	
	if (a_qty=='' || a_qty==0){
		$(".errorChk").text("Required Qty");
		$("#btn_submit_usages").show();
	}else{
		if (imagePathB!=""){							
			$(".errorChk").text("Syncing photo ..");
			imageName2 = localStorage.mobileNo+"_"+get_time+".jpg";			
			uploadPhotoUsag(imagePathB, imageName2);
		}
		
		//alert(apipath+"submitData_usages?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+localStorage.town+"&routeName="+routeName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmCode="+posmCode+"&a_qty="+a_qty+"&imageName2="+imageName2);
		$.ajax({
			type: 'POST',
			url:apipath+"submitData_usages?&syncCode="+localStorage.sync_code+"&repID="+localStorage.repID+"&repName="+localStorage.repName+"&mobileNo="+localStorage.mobileNo+"&town="+localStorage.town+"&routeName="+routeName+"&outlet_code="+outlet_code+"&outlet_name="+outlet_name+"&posmCode="+posmCode+"&a_qty="+a_qty+"&imageName2="+imageName2,
																																																													
			success: function(result) {			
				if(result=='Success'){
					
					$("#usagesPhoto").val("");	
					$("#posmCode").val("");
					$("#qty").val("");	
					document.getElementById('myImageB').src = '';
									
					$(".sucChk").text('Successfully Submitted');
					$(".errorChk").text("");
					$("#btn_submit_usages").hide();	
					setTimeout(function(){
						location.reload();
					},5000);		
				}else{
					$(".errorChk").text("Please check internet connection");															
					$("#btn_submit_usages").show();
				}
				
			}//end result
		});//end ajax
	}
}


function getUsagesImage() { 
	navigator.camera.getPicture(onSuccess1, onFail1, { quality: 90,
	targetWidth: 600,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccess1(imageURI) {		
    var image = document.getElementById('myImageB');
    image.src = imageURI;
	imagePathB = imageURI;	
	$("#usagesPhoto").val(imagePathB);
	
}

function onFail1(message) {
	imagePathB="";
	$("#usagesPhoto").val('');
    alert('Failed because: ' + message);
}

function uploadPhotoUsag(imageURI, imageName2) { 	
	//winAchInfo();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/merchandizing_image/merchandizing_image/"),win2,onfail2,options);
}

function win2(r) {	
	$(".errorChk").text('Image upload Successful.');
}

function onfail2(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_submit_usages").show();
}



function exit() {
	navigator.app.exitApp();
	//navigator.device.exitApp();
}
